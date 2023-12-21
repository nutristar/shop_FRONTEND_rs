// fetchTokens.tsx

export async function fetchTokens(authorizationCode: string): Promise<any> {
  // const clientId: string = '4qr5r7i8mhnkpo5nol3a8lrn5';
  // const redirectUri: string = 'https://dsvxb49u3nk1f.cloudfront.net/';
  // const tokenEndpoint: string = 'https://rrttxx.auth.us-east-1.amazoncognito.com/oauth2/token';
  const clientId: string = 'bqq3mm4tu09lfgr54pvt6dfos';
  // const redirectUri: string = 'http://localhost:3000/';  
  const redirectUri: string = 'https://dsvxb49u3nk1f.cloudfront.net/';
  const tokenEndpoint: string = 'https://demoappauthlun.auth.us-east-1.amazoncognito.com/oauth2/token';

  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('client_id', clientId);
  params.append('redirect_uri', redirectUri);
  params.append('code', authorizationCode);

  const response = await fetch(tokenEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response.json(); // Тип возвращаемого значения зависит от структуры ответа сервера
}
