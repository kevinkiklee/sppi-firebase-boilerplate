/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const home = require('./app/home');
const advertiser = require('./app/advertiser');
const publisher = require('./app/publisher');
const dsp = require('./app/dsp');
const ssp = require('./app/ssp');

exports.home = home.home;
exports.advertiser = advertiser.advertiser;
exports.publisher = publisher.publisher;
exports.dsp = dsp.dsp;
exports.ssp = ssp.ssp;
