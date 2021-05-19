select  "c"."name" as "category",
        count("fC".*) as "totalMovies"
  from "categories" as "c"
  join "filmCategory" as "fC" using ("categoryId")
  join "films" using ("filmId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "firstName" = 'Lisa' AND "lastName" = 'Monroe'
  group by "c"."name";
