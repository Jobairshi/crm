import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema, rules } from "@ioc:Adonis/Core/Validator";

export default class SchoolValidator {
  public async validateCreateSiteSchema(ctx: HttpContextContract) {
    const userSchema = schema.create({
      first_name: schema.string({
        escape: true,
        trim: true,
      }),
      last_name: schema.string({
        escape: true,
        trim: true,
      }),
      email: schema.string({}, [
        rules.email(),
        rules.unique({
          table: "users",
          column: "email",
          where: {
            user_type: "SITE_OWNER",
          },
        }),
      ]),
      password: schema.string([rules.minLength(6)]),
      site_name: schema.string({ trim: true }),
      plan: schema.enum(["basic", "pro", "vip"] as const),
      interval: schema.enum([
        "month",
        "year",
        "commission",
        "grow_together",
      ] as const),
      commission: schema.number.optional([
        rules.range(0, 100),
        rules.requiredWhen("interval", "in", ["commission", "grow_together"]),
      ]),
      is_trial: schema.boolean.optional(),
      total_amount: schema.number.optional(),
      stripe_payment_intent_uuid: schema.string.optional(),
      stripe_subscription_uuid: schema.string.optional(),
      is_internal: schema.boolean.optional(),
      is_elite: schema.boolean.optional(),
      deal_type: schema.enum.optional(['ltd_plan_v2', 'agency_v2'] as const),
    });

    return await ctx.request.validate({
      schema: userSchema,
      messages: {
        "first_name.required": "First name is required",
        "last_name.required": "Last name is required",
        "email.required": "Email is required",
        "email.unique": "Email is already in use",
        "email.email": "Invalid email address",
        "email.exists": "Invalid email address",
        "password.required": "Password is required",
        "password.minLength": "Password must be at least 6 characters long",
        "password.maxLength":
          "Password must be at less or equal 16 characters long",
        "site_name.required": "Site name is required",
        "plan.required": "Plan is required",
        "plan.enum": "Plan must be either basic, pro or vip",
        "interval.required": "Interval is required",
        "interval.enum": "Interval must be either month or year",
        "commission.range": "Commission must be between 0 and 100",
        "commission.requiredWhen":
          "Commission is required when interval is commission",
        "stripe_payment_intent_uuid.string":
          "Stripe payment intent uuid must be a string",
        "stripe_subscription_uuid.string":
          "Stripe subscription uuid must be a string",
        "is_trial.boolean": "Is trial must be a boolean",
        "total_amount.number": "Total amount must be a number",
        "is_internal.boolean": "Is internal must be a boolean",
        "is_elite.boolean": "is_elite must be boolean",
        "deal_type.enum": "deal_type must be ltd_plan_v2 or agency_v2"
      },
    });
  }

  public async validateUpdateSiteSchema(ctx: HttpContextContract) {
    const userSchema = schema.create({
      email: schema.string.optional({}, [
        rules.email(),
        // rules.unique({
        //   table: "users",
        //   column: "email",
        //   where: {
        //     user_type: "SITE_OWNER",
        //   },
        // }),
      ]),
      
      plan: schema.enum.optional(["basic", "pro", "vip"] as const),
      interval: schema.enum.optional([
        "month",
        "year",
        "commission",
        "grow_together",
      ] as const),
      commission: schema.number.optional([
        rules.range(0, 100),
        rules.requiredWhen("interval", "in", ["commission", "grow_together"]),
      ]),
      is_trial: schema.boolean.optional(),
      total_amount: schema.number.optional(),
      is_internal: schema.boolean.optional(),
      stripe_payment_intent_uuid: schema.string.optional(),
      stripe_subscription_uuid: schema.string.optional(),
      custom_domain_url: schema.string.optional(),
      subscription_status: schema.enum.optional(["INACTIVE", "ACTIVE"] as const),
      transactional_domain_name: schema.string.nullableAndOptional(),
      transactional_sender_email: schema.string.nullableAndOptional({}, [rules.email()]),
      allow_agency_transactional_email: schema.boolean.optional(),
      elastic_domain: schema.string.nullableAndOptional(),
      elastic_sender_name: schema.string.nullableAndOptional(),
      elastic_sender_email: schema.string.nullableAndOptional({}, [rules.email()]),
      elastic_reply_to_email: schema.string.nullableAndOptional({}, [rules.email()]),
      elastic_domain_status: schema.boolean.optional(),
      has_app: schema.boolean.optional(),
      is_elite: schema.boolean.optional(),
      is_valid: schema.boolean(),
      deal_type: schema.enum.optional(["ltd_plan_v2", "agency_v2"] as const),
      agency_commission: schema.number.optional(),
      stripe_product_uuid : schema.enum.optional(["ezycourse_tier_1", "ezycourse_tier_2", "ezycourse_tier_3", "ezycourse_tier_4"] as const),
      
    });

    return await ctx.request.validate({
      schema: userSchema,
      messages: {
        // "email.unique": "Email should be Unique",
        "email.string": "email must be string",
        "plan.enum": "Plan must be either basic, pro or vip",
        "interval.enum": "Interval must be either month or year",
        "is_valid.required": 'is_valid is required',
        "is_valid.boolean": "is_valid must be boolean",
        "commission.range": "Commission must be between 0 and 100",
        "stripe_payment_intent_uuid.string":
          "Stripe payment intent uuid must be a string",
        "stripe_subscription_uuid.string":
          "Stripe subscription uuid must be a string",
        "is_trial.boolean": "Is trial must be a boolean",
        "total_amount.number": "Total amount must be a number",
        "is_internal.boolean": "Is internal must be a boolean",
        "custom_domain_url.string": "Site url must be string",
        "subscription_status.enum": "status must be active or inactive",
        "transactional_domain_name.string":
          "transactional_domain_name must be string",
        "transactional_sender_email.string":
          "transactional_sender_email must be string",
        "allow_agency_transactional_email.boolean":
          "allow_agency_transactional_email must be boolean",
        "elastic_domain.string": "elastic_domain must be string",
        "elastic_sender_name.string": "elastic_sender_name must be string",
        "elastic_sender_email.string": "elastic_sender_email must be string",
        "elastic_reply_to_email.string":
          "elastic_reply_to_email must be string",
        "elastic_domain_status.boolean":
          "elastic_domain_status must be boolean",
        "has_app.boolean": "has_app must be boolean",
        "is_elite.boolean": "is_elite must be boolean",
        "deal_type.enum": "deal_type must be ltd_plan_v2 or agency_v2",
        "agency_commission.number": "agency_commission must be number",
        "stripe_product_uuid.enum": " stripe_product_uuid must be ezycourse_tier_1 or ezycourse_tier_2 or ezycourse_tier_3 or ezycourse_tier_4"
       
      },
    });
  }

  public async validateAgencyCreateSchema(ctx: HttpContextContract) {
    const checkoutSchema = schema.create({
      first_name: schema.string({}),
      last_name: schema.string({}),
      email: schema.string({}, [
        rules.email(),
        rules.unique({
          table: 'users',
          column: 'email',
          where: {
            user_type: 'SITE_OWNER',
          },
        }),
      ]),
      password: schema.string([
        rules.minLength(6),
        rules.confirmed(),
      ]),
      school_name: schema.string({ escape: true, trim: true }, [
        rules.minLength(3),
        rules.maxLength(20),
        rules.unique({ table: 'schools', column: 'name' }),
      ]),
      tier_1: schema.number.optional(),
      tier_2: schema.number.optional(),
      tier_3: schema.number.optional(),
      payment_intent_id: schema.string.optional(),
    });

    return await ctx.request.validate({
      schema: checkoutSchema,
      messages: {
        'stripe_setup_intent_uuid.required': 'Stripe setup intent is required',
        'stripe_setup_intent_uuid.string': 'Invalid Stripe setup intent uuid has been provided',
        'first_name.required': 'First name is required',
        'first_name.string': 'Invalid first name has been provided',
        'last_name.required': 'Last name is required',
        'last_name.string': 'Invalid last name has been provided',
        'email.required': 'Email is required',
        'email.string': 'Invalid email has been provided',
        'email.email': 'Invalid email has been provided',
        'email.unique': 'Email already exists',
        'password.required': 'Password is required',
        'password.string': 'Invalid password has been provided',
        'password_confirmation.confirmed': "Password and confirm password doesn't match",
        'school_name.required': 'School name is required',
        'school_name.string': 'Invalid school name has been provided',
        'school_name.unique': 'School name already exists',
        'school_name.minLength': 'School name must be at least 3 characters',
        'school_name.maxLength': 'School name must be at most 20 characters',
      },
    });
  }

}
