const fetchTodos = async () => {
    try {
        // const response = await axios.get('https://reqres.in/api/users')
        // return response.data
        return [ "abc", "dhc" ]
    } catch(error) {
        console.error(error);
        return
    }
};

export default { fetchTodos }
