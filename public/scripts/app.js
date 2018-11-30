console.log(SANITY);

$.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api',
    success: handleSuccess,
    error: handleError
  });
 
  const handleSuccess = json =>  console.log(json);
 
  const handleError = (xhr, status, errorThrown) => console.log('quack quack');