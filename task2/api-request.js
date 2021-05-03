const apiRequest = async () => {
    const response = await fetch('https://the-one-api.dev/v2/movie', {
      headers: {
        'Authorization': 'Bearer h5QvIQ7SPlwA1FRBGLZf'
      }});
    if (response.status === 200) {
        let movies = [];
        const data = await response.json();
        for(let i = 0; i < data.docs.length; i++) {
            movies.push('\n' + data.docs[i].name);
    }
    document.getElementById('movieTitles').innerText = movies;
    console.log(movies);
    } else {
        throw new Error('Something went wrong');
    }
}
