export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.668286',
      bl_lng: '24.943013',
      tr_lat: '43.540389',
      tr_lng: '44.827639',
      limit: '300'
    },
    headers: {
      'x-rapidapi-key': 'a082eb287dmsh1380849a26b0703p124dc5jsn234c14270c84',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
    
  };

export const dOptions={
  headers: {
    'x-rapidapi-key': 'a082eb287dmsh1380849a26b0703p124dc5jsn234c14270c84',
    'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
  }
}