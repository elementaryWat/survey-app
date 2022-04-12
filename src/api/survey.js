const globalConfig = {
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
};

export async function getSurvey() {
    try {
        const response = await fetch('./data/sample.json'
            , {
                headers: {
                    ...globalConfig,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
        return response.json()
    } catch (err) {
        return {}
    }
}