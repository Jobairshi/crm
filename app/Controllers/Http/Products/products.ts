import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.get(
    "get/:schoolId",
    "ProductController.getAllProductAccordingToSchool"
  );
  Route.post("delete/:id", "ProductController.deleteAccordingToSchool");
})
  .prefix("ezycourse/super-admin/products")
  .namespace("App/Controllers/Http/Products");
