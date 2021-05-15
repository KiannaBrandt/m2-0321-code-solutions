select  "a"."line1",
        "c"."name" as "cityName",
        "a"."district",
        "co"."name" as "countryName"
  from "countries" as "co"
  join "cities" as "c" using ("countryId")
  join "addresses" as "a" using ("cityId");
