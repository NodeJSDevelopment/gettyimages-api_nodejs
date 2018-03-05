import Api from "../../gettyimages-api";
import nock from "nock";
import test from "ava";

test.before(t=>{
    nock("https://api.gettyimages.com")
            .post("/oauth2/token", "client_id=apikey&client_secret=apisecret&grant_type=client_credentials")
            .reply(200, {
                access_token: "client_credentials_access_token",
                token_type: "Bearer",
                expires_in: "1800"
            })
            .get("/v3/collections")
            .reply(200);
});

test("Collections", t => {
    debugger;
    var client = new Api({apiKey: "qkc3ccsppa8bx4fqpaw7duzz", apiSecret: "UndzXjVQZTctNxuJKhbc3AudTx7SMXvbF4d44nTTPdD4k"});
    return Promise.resolve(client.collections().execute())
    .then(text => {
        console.log(JSON.stringify(text.images[0]));
        t.true(JSON.stringify(text.images[0]), "xx")
    })

})

// test.cb("Collections: When collections end point is called, the correct path is built", t => {  
//     var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
//      t.end(client.collections().execute((err, response) => {
//     }));
// });