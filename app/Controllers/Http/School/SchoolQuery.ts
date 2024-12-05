import AppOrder from "App/Models/AppOrder";
import Chapter from "App/Models/Chapter";
import ChatGroup from "App/Models/ChatGroup";
import Course from "App/Models/Course";
import CreateEvent from "App/Models/CreateEvent";
import EmailTemplate from "App/Models/EmailTemplate";
import Group from "App/Models/Group";
import Language from "App/Models/Language";
import Lesson from "App/Models/Lesson";
import MembershipPlan from "App/Models/MembershipPlan";
import Order from "App/Models/Order";
import Page from "App/Models/Page";
import PhysicalProduct from "App/Models/PhysicalProduct";
import Product from "App/Models/Product";
import ProductCategory from "App/Models/ProductCategory";
import School from "App/Models/School";
import User from "App/Models/User";

export default class SchoolsQuery {
  public async createAppOrder(values) {
    return AppOrder.create(values);
  }
  public async createSchool(data) {
    return School.create(data);
  }
  public async updateSchool(data) {
    const existingSchool = await School.query()
      .where("id", data.school_id)
      .first();
    if (existingSchool) {
      (existingSchool.custom_domain_url = data.custom_domain_url),
        (existingSchool.status = data.status),
        (existingSchool.transactional_domain_name =
          data.transactional_domain_name),
        (existingSchool.transactional_sender_email =
          data.transactional_sender_email),
        (existingSchool.allow_agency_transactional_email =
          data.allow_agency_transactional_email),
        (existingSchool.elastic_domain = data.elastic_domain),
        (existingSchool.elastic_sender_name = data.elastic_sender_name),
        (existingSchool.elastic_sender_email = data.elastic_sender_email),
        (existingSchool.elastic_reply_to_email = data.elastic_reply_to_email),
        (existingSchool.elastic_domain_status = data.elastic_domain_status),
        (existingSchool.has_app = data.has_app),
        (existingSchool.is_valid = data.is_valid),
        await existingSchool.save();
    }
    return existingSchool;
  }
  public async updateAppOrder(data) {
    const existingApp = await AppOrder.query()
      .where("school_id", data.school_id)
      .first();
    if (existingApp) {
      (existingApp.plan = data.plan),
        (existingApp.interval = data.interval),
        (existingApp.commission = data.commission),
        (existingApp.is_trial = data.is_trial),
        (existingApp.total_amount = data.total_amount),
        (existingApp.stripe_payment_intent_uuid =
          data.stripe_payment_intent_uuid),
        (existingApp.stripe_subscription_uuid = data.stripe_subscription_uuid),
        (existingApp.stripe_product_uuid = data.stripe_product_uuid),
        (existingApp.is_elite = data.is_elite),
        (existingApp.deal_type = data.deal_type);
      existingApp.agency_commission = data.agency_commission;
      existingApp.subscription_status = data.subscription_status;
      await existingApp.save();
    }

    return existingApp;
  }
  public async getAllSchool() {
    const schools = await School.query().preload("app_order");
    const totalSchool = schools.length;
    return {
      schools,
      totalSchool,
    };
    const totalSchools = await School.query().count("id as total").first();
    return {
      data: schools,
      meta: totalSchools?.serialize().meta,
    };
  }
  public async getSchoolBySchoolId(id) {
    return await School.query()
      .where("id", id)
      .preload("app_order")
      .preload("user")
      .first();
  }

  public async getSchoolByIdOrName(nameid) {
    return await School.query()
      .where("id", nameid)
      .orWhere("name", nameid)
      .first();
  }

  public async deleteASchool(id: number) {
    const school = await School.query().where("id", id).delete();
    const app_order = await AppOrder.query().where("school_id", id).delete();
    const user = await User.query().where("school_id", id).delete();
    const course = await Course.query().where("school_id", id).delete();
    const product = await Product.query().where("school_id", id).delete();
    const chapter = await Chapter.query().where("school_id", id).delete();
    const lesson = await Lesson.query().where("school_id", id).delete();
    const chatGroup = await ChatGroup.query().where("school_id", id).delete();
    const emailTemplate = await EmailTemplate.query()
      .where("school_id", id)
      .delete();
    const createEvent = await CreateEvent.query()
      .where("school_id", id)
      .delete();
    const group = await Group.query().where("school_id", id).delete();
    const language = await Language.query().where("school_id", id).delete();
    const memberShipPlan = await MembershipPlan.query()
      .where("school_id", id)
      .delete();
    const order = await Order.query().where("school_id", id).delete();
    const page = await Page.query().where("school_id", id).delete();
    const productCategory = await ProductCategory.query()
      .where("school_id", id)
      .delete();
    const physicalProduct = await PhysicalProduct.query()
      .where("school_id", id)
      .delete();

    return {
      school,
      app_order,
      user,
      course,
      product,
      chapter,
      lesson,
      chatGroup,
      emailTemplate,
      createEvent,
      group,
      language,
      memberShipPlan,
      order,
      page,
      productCategory,
      physicalProduct,
    };
  }
}
