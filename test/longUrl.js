import http from 'k6/http';
import { check, sleep } from 'k6';
const urls = require("./longUrl.json");

// const arrUrls = urls.map(url => url['Root Domain'])

export const options = {
	// discardResponseBodies: true,
	// scenarios: {
	// 	contacts: {
	// 		executor: 'constant-arrival-rate',
	// 		rps: 20,
	// 		timeUnit: '1s',
	// 		duration: '300s',
	// 		vus: 10,
	// 	}
	// }
	vus: 10,
	duration: '60s',
	rps: 200
};

const testUrl = () => {
	// const payload = arrUrls[0];
	// console.log(payload);
	const params = {
		headers: {
			"Content-Type": "application/json",
		}
	};
	const payload = JSON.stringify({
		longURL: 'https://www.nba.com/'
	});
	const Result = http.post("http://short-url.stylish-test.click/api/v1/data/shortenURL1", payload, params);

	check(Result, {
		"status is 200": (res) => res.status === 200,
	});
}

export default function () {
	testUrl();
	sleep(1);
}
