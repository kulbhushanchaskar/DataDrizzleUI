import { TCCNotification } from './tcc.notification';

export interface IResponse<T> {
    httpStatus: string;
    data: T;
    notifications: TCCNotification;

   // Notification notifications;
	//T data;//A generic data filed which needs to be sent from server to front-end/client
	//String httpStatus;//optional field for now we are not using this
}