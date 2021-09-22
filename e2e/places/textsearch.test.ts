/**
 * Copyright 2020 Google LLC
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

import { textSearch } from "../../src/places/textsearch";

test("textsearch should return correct result", async () => {
  const params = {
    query: "Seattle",
    key: process.env.GOOGLE_MAPS_API_KEY,
  };

  const r = await textSearch({ params: params });

  expect(r.data.results.length).toBeTruthy();
  expect(Object.keys(r.data.results[0]).sort()).toMatchInlineSnapshot(`
    Array [
      "formatted_address",
      "geometry",
      "icon",
      "icon_background_color",
      "icon_mask_base_uri",
      "name",
      "photos",
      "place_id",
      "reference",
      "types",
    ]
  `);
});
