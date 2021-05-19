select  "c"."firstName",
        "c"."lastName",
        sum("p"."amount") as "totalPaid"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  group by "c"."firstName", "c"."lastName"
  order by "totalPaid" desc;
