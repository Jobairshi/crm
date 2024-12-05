import Route from "@ioc:Adonis/Core/Route";

Route.group(() => {
  Route.post(
    "create-school", 
    "SchoolController.createSchoolController");
  Route.post(
    "update-school/:schoolId",
    "SchoolController.updateSchoolController"
  );
  Route.get(
    'get-school/:schoolIdOrName',
    "SchoolController.getSchoolByIdOrName"
  )
  Route.get(
    "get-all-school", 
    "SchoolController.getAllSchool");
  Route.get(
    "get-school/:schoolId", 
    "SchoolController.getSchoolBySchoolId");
  Route.post(
    "delete-school/:schoolId", 
    "SchoolController.deleteASchool");
})
  .prefix("ezycourse/super-admin/school")
  .namespace("App/Controllers/Http/School");
