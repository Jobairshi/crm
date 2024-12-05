import {GuardsList} from '@ioc:Adonis/Addons/Auth';
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext';
import {AuthenticationException} from '@adonisjs/auth/build/standalone';
// import  UserRole  from 'App/Models/UserRole';
/**
 * Auth middleware is meant to restrict un-authenticated access to a given route
 * or a group of routes.
 *
 * You must register this middleware inside `start/kernel.ts` file under the list
 * of named middleware.
 */
export default class AuthMiddleware {
  /**
   * The URL to redirect to when request is Unauthorized
   */
  protected redirectTo = '/login';

  /**
   * Authenticates the current HTTP request against a custom set of defined
   * guards.
   *
   * The authentication loop stops as soon as the user is authenticated using any
   * of the mentioned guards and that guard will be used by the rest of the code
   * during the current request.
   */
  protected async authenticate(auth: HttpContextContract['auth'], guards: (keyof GuardsList)[]) {
    /**
     * Hold reference to the guard last attempted within the for loop. We pass
     * the reference of the guard to the "AuthenticationException", so that
     * it can decide the correct response behavior based upon the guard
     * driver
     */
    let guardLastAttempted: string | undefined;

    for (const guard of guards) {
      guardLastAttempted = guard;

      if (await auth.use(guard).check()) {
        /**
         * Instruct auth to use the given guard as the default guard for
         * the rest of the request, since the user authenticated
         * succeeded here
         */
        auth.defaultGuard = guard;
        return true;
      }
    }

    /**
     * Unable to authenticate using any guard
     */
    throw new AuthenticationException(
      'Unauthorized access',
      'E_UNAUTHORIZED_ACCESS',
      guardLastAttempted,
      this.redirectTo
    );
  }

  /**
   * Handle request
   */
  public async handle(
    {auth, response, sentry}: HttpContextContract,
    next: () => Promise<void>,
    customGuards: (keyof GuardsList)[]
  ) {
    const check: any = await auth.use('web').authenticate();

    const user_types = [
      'SITE_OWNER',
      'SITE_ADMIN',
      'REVENUE_PARTNER',
      'TEACHER',
      'DEVELOPER',
      'AGENCY_OWNER',
      'SELLER',
    ];

    if (!check || (check && !user_types.includes(check.user_type))) {
      return response.status(401).send({
        // this code is for the mobile client to know that the user is not authenticated
        code: 'E_UNAUTHENTICATED',
        msg: 'You are not authenticated, please login to access!',
      });
    }
    const guards = customGuards.length ? customGuards : [auth.name];
    await this.authenticate(auth, guards);
    sentry?.setUser({
      id: auth.user!.id,
      email: auth.user!.email,
      name: auth.user!.full_name,
    });
    await next();
  }
}
