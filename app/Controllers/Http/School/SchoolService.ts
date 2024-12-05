
import SchoolsQuery from "./SchoolQuery";
import AuthQuery from "../Auth/AuthQuery";



export default class SchoolService{
    private schoolQuery : SchoolsQuery;
    private authQuery: AuthQuery;

    constructor(){
       this.schoolQuery = new SchoolsQuery();  
       this.authQuery = new AuthQuery()
    }

    public async createSchool(payload:{
      first_name : string,
      last_name : string,
      email : string,
      password : string,
      site_name : string,
      plan : "basic"| "pro"| "vip",
      interval: "month"| "year" | "commission" | "grow_together",
      is_internal : boolean | undefined,
      commission?: number ,
      stripe_payment_intent_uuid? : string  ,
      stripe_subscription_uuid? : string ,
      total_amount? : number ,
      is_trial?: boolean ,
      is_elite?: boolean ,
      deal_type?: "ltd_plan_v2" | "agency_v2" 
    }) {
     
      const school = await this.schoolQuery.createSchool({
        name: payload.site_name,
        site_name: payload.site_name,
        reply_email: payload.email,
        is_internal: payload.is_internal,
        next_onboarding_step: null,
      });
      
      
  
      const user = await this.authQuery.register({
        first_name:payload.first_name,
        last_name:payload.last_name,
        email:payload.email,
        password:payload.password,
        full_name: `${payload.first_name} ${payload.last_name}`,
        school_id: school.id,
        user_type: 'SITE_OWNER',
        is_verified: 'VERIFIED',
      });
  
      const orderPayload: any = {
        user_id: user.id,
        school_id: user.school_id,
        currency: 'USD',
        interval_count: 1,
        status: 'COMPLETED',
        subscription_status: 'ACTIVE',
        is_trial:payload.is_trial,
        plan:payload.plan,
        interval:payload.interval,
        total_amount:payload.total_amount,
        commission:payload.commission,
        stripe_payment_intent_uuid:payload.stripe_payment_intent_uuid,
        stripe_subscription_uuid:payload.stripe_subscription_uuid,
        is_elite:payload.is_elite,
        deal_type:payload.deal_type,
      };
  
      
      const order = await this.schoolQuery.createAppOrder(orderPayload);
      return {
        school,
        user,
        order
      }
     
    }
    public async updateSchool(id,payload:{
      email?: string ,
      plan?: "basic"| "pro" | "vip",
      interval?:"month" | "year"|"commission" | "grow_together",
      commission?:number,
      is_trial?:boolean,
      total_amount?:number,
      is_internal?:boolean,
      stripe_payment_intent_uuid?:string,
      stripe_subscription_uuid?:string,
      custom_domain_url?:string,
      subscription_status?: "ACTIVE" | "INACTIVE",
      transactional_domain_name?: string | null,
      transactional_sender_email?: string | null,
      allow_agency_transactional_email?: boolean,
      elastic_domain?: string | null,
      elastic_sender_name?: string | null,
      elastic_sender_email?: string | null,
      elastic_reply_to_email?: string | null,
      elastic_domain_status?: boolean,
      has_app?: boolean | null,
      is_elite?: boolean,
      deal_type?: "ltd_plan_v2"|  "agency_v2",
      agency_commission?: number,
      stripe_product_uuid?: string,
      is_valid: boolean,
      
    }) {

     const user = await this.authQuery.updateUser( id, payload.email)
      const school = await this.schoolQuery.updateSchool({
        school_id:id,
        custom_domain_url: payload.custom_domain_url,
        transactional_domain_name:payload.transactional_domain_name,
        transactional_sender_email:payload.transactional_sender_email,
        allow_agency_transactional_email:payload.allow_agency_transactional_email,
        elastic_domain:payload.elastic_domain,
        elastic_sender_name:payload.elastic_sender_name,
        elastic_sender_email:payload.elastic_sender_email,
        elastic_reply_to_email:payload.elastic_reply_to_email,
        elastic_domain_status:payload.elastic_domain_status,
        has_app:payload.has_app,
        is_valid: payload.is_valid,
       
            }); 
      const orderPayload: any = {
        school_id:id,
        is_trial: payload.is_trial,
        plan: payload.plan,
        interval: payload.interval,
        subscription_status: payload.subscription_status,
        total_amount: payload.total_amount,
        commission: payload.commission,
        stripe_payment_intent_uuid: payload.stripe_payment_intent_uuid,
        stripe_subscription_uuid: payload.stripe_subscription_uuid,
        stripe_product_uuid:payload.stripe_product_uuid,
        is_elite: payload.is_elite,
        deal_type: payload.deal_type,
        agency_commission: payload.agency_commission
      };
  
      const order = await this.schoolQuery.updateAppOrder(orderPayload);
      
      return {
        school,
        order,
        user
      }
     
    }

    public async getAllSchool(){
      return await this.schoolQuery.getAllSchool()
    }
   public async getSchoolBySchoolId(id){
    return await this.schoolQuery.getSchoolBySchoolId(id)
   }

   public async getSchoolByIdOrName(search: string|number){
    return await this.schoolQuery.getSchoolByIdOrName(search)
   }

   public async deleteASchool(id: number){
    return await this.schoolQuery.deleteASchool(id)
   }
   
}