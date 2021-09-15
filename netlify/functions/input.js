let words = "words"
exports.handler = async function getInputFromTextBox() {
    return {
        statusCode: 200,
        body: JSON.stringify(words)
    }
}