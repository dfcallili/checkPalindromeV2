// tests/check-palindrome-test.js

process.env.NODE_ENV = 'test';


var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

var host = 'http://localhost:3000';

chai.use(chaiHttp);

describe('Palindromes', () => {
  /*
  * Test the /POST route
  */
  describe('/POST checkPalindrome', () => {
      it('it should not POST a Palindrome word', (done) => {
				
        var newTest = {
            inputText1: "MACACO"
        }
		
        chai.request(host)
            .post('/checkPalindrome')
            .send(newTest)
            .end((err, res) => {
                res.should.have.status(400);
              done();
            });
      });
	  it('it should POST a Palindrome word', (done) => {
				
        var newTest = {
            inputText1: "A MAN A PLAN A CANAL PANAMA"
        }
		
        chai.request(host)
            .post('/checkPalindrome')
            .send(newTest)
            .end((err, res) => {
                res.should.have.status(200);
				
              done();
            });
      });
	  it('it should POST a Palindrome word', (done) => {
				
        var newTest = {
            inputText1: "Was it a cat I saw?"
        }
		
        chai.request(host)
            .post('/checkPalindrome')
            .send(newTest)
            .end((err, res) => {
                res.should.have.status(200);
				
              done();
            });
      });

  });
});