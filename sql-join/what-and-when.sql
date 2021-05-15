select  "f"."releaseYear",
        "c"."name"
  from "categories" as "c"
  join "filmCategory" using ("categoryId")
  join "films" as "f" using ("filmId")
  where "f"."title" = 'Boogie Amelie'
