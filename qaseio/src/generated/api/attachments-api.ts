/* tslint:disable */
/* eslint-disable */
/**
 * Qase.io TestOps API v1
 * Qase TestOps API v1 Specification.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@qase.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AttachmentListResponse } from '../model';
// @ts-ignore
import { AttachmentResponse } from '../model';
// @ts-ignore
import { AttachmentUploadsResponse } from '../model';
// @ts-ignore
import { HashResponse } from '../model';
/**
 * AttachmentsApi - axios parameter creator
 * @export
 */
export const AttachmentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This method allows to remove attachment by Hash. 
         * @summary Remove attachment by Hash
         * @param {string} hash Hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAttachment: async (hash: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('deleteAttachment', 'hash', hash)
            const localVarPath = `/v1/attachment/{hash}`
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to retrieve attachment by Hash. 
         * @summary Get attachment by Hash
         * @param {string} hash Hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAttachment: async (hash: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hash' is not null or undefined
            assertParamExists('getAttachment', 'hash', hash)
            const localVarPath = `/v1/attachment/{hash}`
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to retrieve attachments. 
         * @summary Get all attachments
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAttachments: async (limit?: number, offset?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/attachment`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This method allows to upload attachment to Qase. Max upload size: * Up to 32 Mb per file * Up to 128 Mb per single request * Up to 20 files per single request  If there is no free space left in your team account, you will receive an error with code 507 - Insufficient Storage. 
         * @summary Upload attachment
         * @param {string} code Code of project, where to search entities.
         * @param {Array<any>} [file]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadAttachment: async (code: string, file?: Array<any>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'code' is not null or undefined
            assertParamExists('uploadAttachment', 'code', code)
            const localVarPath = `/v1/attachment/{code}`
                .replace(`{${"code"}}`, encodeURIComponent(String(code)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication TokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Token", configuration)

      if (file) {
        file.forEach((element) => {
          if (element?.name !== undefined && element?.value !== undefined) {
            localVarFormParams.append('file', element.value, element.name);
          } else {
            localVarFormParams.append('file', element as any);
          }
        });
      }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data; boundary=' + localVarFormParams.getBoundary();

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AttachmentsApi - functional programming interface
 * @export
 */
export const AttachmentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AttachmentsApiAxiosParamCreator(configuration)
    return {
        /**
         * This method allows to remove attachment by Hash. 
         * @summary Remove attachment by Hash
         * @param {string} hash Hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAttachment(hash: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HashResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAttachment(hash, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve attachment by Hash. 
         * @summary Get attachment by Hash
         * @param {string} hash Hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAttachment(hash: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttachmentResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAttachment(hash, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to retrieve attachments. 
         * @summary Get all attachments
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAttachments(limit?: number, offset?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttachmentListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAttachments(limit, offset, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This method allows to upload attachment to Qase. Max upload size: * Up to 32 Mb per file * Up to 128 Mb per single request * Up to 20 files per single request  If there is no free space left in your team account, you will receive an error with code 507 - Insufficient Storage. 
         * @summary Upload attachment
         * @param {string} code Code of project, where to search entities.
         * @param {Array<File>} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadAttachment(code: string, file?: Array<File>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AttachmentUploadsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadAttachment(code, file, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AttachmentsApi - factory interface
 * @export
 */
export const AttachmentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AttachmentsApiFp(configuration)
    return {
        /**
         * This method allows to remove attachment by Hash. 
         * @summary Remove attachment by Hash
         * @param {string} hash Hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAttachment(hash: string, options?: any): AxiosPromise<HashResponse> {
            return localVarFp.deleteAttachment(hash, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve attachment by Hash. 
         * @summary Get attachment by Hash
         * @param {string} hash Hash.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAttachment(hash: string, options?: any): AxiosPromise<AttachmentResponse> {
            return localVarFp.getAttachment(hash, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to retrieve attachments. 
         * @summary Get all attachments
         * @param {number} [limit] A number of entities in result set.
         * @param {number} [offset] How many entities should be skipped.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAttachments(limit?: number, offset?: number, options?: any): AxiosPromise<AttachmentListResponse> {
            return localVarFp.getAttachments(limit, offset, options).then((request) => request(axios, basePath));
        },
        /**
         * This method allows to upload attachment to Qase. Max upload size: * Up to 32 Mb per file * Up to 128 Mb per single request * Up to 20 files per single request  If there is no free space left in your team account, you will receive an error with code 507 - Insufficient Storage. 
         * @summary Upload attachment
         * @param {string} code Code of project, where to search entities.
         * @param {Array<any>} [file]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadAttachment(code: string, file?: Array<any>, options?: any): AxiosPromise<AttachmentUploadsResponse> {
            return localVarFp.uploadAttachment(code, file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AttachmentsApi - object-oriented interface
 * @export
 * @class AttachmentsApi
 * @extends {BaseAPI}
 */
export class AttachmentsApi extends BaseAPI {
    /**
     * This method allows to remove attachment by Hash. 
     * @summary Remove attachment by Hash
     * @param {string} hash Hash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public deleteAttachment(hash: string, options?: AxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).deleteAttachment(hash, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve attachment by Hash. 
     * @summary Get attachment by Hash
     * @param {string} hash Hash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public getAttachment(hash: string, options?: AxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).getAttachment(hash, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to retrieve attachments. 
     * @summary Get all attachments
     * @param {number} [limit] A number of entities in result set.
     * @param {number} [offset] How many entities should be skipped.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public getAttachments(limit?: number, offset?: number, options?: AxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).getAttachments(limit, offset, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This method allows to upload attachment to Qase. Max upload size: * Up to 32 Mb per file * Up to 128 Mb per single request * Up to 20 files per single request  If there is no free space left in your team account, you will receive an error with code 507 - Insufficient Storage. 
     * @summary Upload attachment
     * @param {string} code Code of project, where to search entities.
     * @param {Array<any>} [file]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AttachmentsApi
     */
    public uploadAttachment(code: string, file?: Array<any>, options?: AxiosRequestConfig) {
        return AttachmentsApiFp(this.configuration).uploadAttachment(code, file, options).then((request) => request(this.axios, this.basePath));
    }
}
