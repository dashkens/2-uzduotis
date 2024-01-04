export const handleErrors = async (response) => {
    if (!response.ok) {
    const json = await response.json();
    return { 
        error: json.error, emptyFields: json.emptyFields 
    }}
    return { error: '', emptyFields: [] };
};