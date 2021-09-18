const {mongoose, Subscription} = require('./connection');

const parser = ({body, ...event}) => ({...event, body: !!body ? JSON.parse(body) : ''})

exports.handler = async event => {
 try{
   const {body, httpMethod} = parser(event);
   await mongoose;
   switch (event.httpMethod){
      case('GET'): {
        const allSubs = await Subscription.find();
        return {
            statusCode: 200,
            body: JSON.stringify(allSubs)
        }
      }
      case('POST'): {
          const response = await Subscription.create(body);
          return {
              statusCode: 201,
              body: JSON.stringify(response)
          }
      }
      case('DELETE'): {
        const response = await Subscription.deleteOne(body);
        return {
            statusCode: 200,
            body: JSON.stringify(response)
        }
    }
   }
 }catch(err){
     console.error(err);
     return {
         statusCode: 500,
        body: JSON.stringify(err),
     }
 }
}