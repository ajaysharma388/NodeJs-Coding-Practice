const Joi = require('joi');
const arrayString = ['banana', 'bacon', 'chese'];
const codingSites = [
     { sourceurl: 'www.github.com' },
     { sourceurl: 'www.hackerrank.com' },
     { sourceurl: 'www.kickstartgoogle.com' },
     { sourceurl: 'www.codeforces' },
     { sourceurl: 'www.codechef.com' },
];
const userInput = {
     personalInfo: {
          streetAddress: '96 , Rly Rd',
          city: 'New York',
          state: 'Washington DC'
     },
     preferences: arrayString,
     sites: codingSites
}

const personalInfoSchema = Joi.object().keys({
     streetAddress: Joi.string().trim().required(),
     city: Joi.string().trim().required(),
     state: Joi.string().min(2).max(20).trim().required()

});
const preferencesSchema = Joi.array().items(Joi.string());
const sitesSchema = Joi.array().items(Joi.object().keys({
     sourceurl: Joi.string().max(40).required(),
}));
const schema = Joi.object().keys({
     personalInfo: personalInfoSchema,
     preferences: preferencesSchema,
     sites: sitesSchema
});

Joi.validate(userInput, schema, (err, result) => {
     if (err) {
          console.log(err);
     } else {
          console.log(result);
     }
});