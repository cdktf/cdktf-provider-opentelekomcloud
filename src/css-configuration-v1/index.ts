/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssConfigurationV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Whether to auto-create index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#auto_create_index CssConfigurationV1#auto_create_index}
  */
  readonly autoCreateIndex?: string;
  /**
  * The CSS cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#cluster_id CssConfigurationV1#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Whether to return the Access-Control-Allow-Credentials of the header during cross-domain access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#http_cors_allow_credentials CssConfigurationV1#http_cors_allow_credentials}
  */
  readonly httpCorsAllowCredentials?: string;
  /**
  * Headers allowed for cross-domain access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#http_cors_allow_headers CssConfigurationV1#http_cors_allow_headers}
  */
  readonly httpCorsAllowHeaders?: string;
  /**
  * Methods allowed for cross-domain access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#http_cors_allow_methods CssConfigurationV1#http_cors_allow_methods}
  */
  readonly httpCorsAllowMethods?: string;
  /**
  * Origin IP address allowed for cross-domain access, for example, **122.122.122.122:9200**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#http_cors_allow_origin CssConfigurationV1#http_cors_allow_origin}
  */
  readonly httpCorsAllowOrigin?: string;
  /**
  * Whether to allow cross-domain access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#http_cors_enabled CssConfigurationV1#http_cors_enabled}
  */
  readonly httpCorsEnabled?: string;
  /**
  * Cache duration of the browser. The cache is automatically cleared after the time range you specify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#http_cors_max_age CssConfigurationV1#http_cors_max_age}
  */
  readonly httpCorsMaxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#id CssConfigurationV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cache size in the query phase. Value range: **1** to **100**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#indices_queries_cache_size CssConfigurationV1#indices_queries_cache_size}
  */
  readonly indicesQueriesCacheSize?: string;
  /**
  * Configured for migrating data from the current cluster to the target cluster through the reindex API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#reindex_remote_whitelist CssConfigurationV1#reindex_remote_whitelist}
  */
  readonly reindexRemoteWhitelist?: string;
  /**
  * Queue size in the force merge thread pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#thread_pool_force_merge_size CssConfigurationV1#thread_pool_force_merge_size}
  */
  readonly threadPoolForceMergeSize?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#timeouts CssConfigurationV1#timeouts}
  */
  readonly timeouts?: CssConfigurationV1Timeouts;
}
export interface CssConfigurationV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#create CssConfigurationV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#delete CssConfigurationV1#delete}
  */
  readonly delete?: string;
}

export function cssConfigurationV1TimeoutsToTerraform(struct?: CssConfigurationV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function cssConfigurationV1TimeoutsToHclTerraform(struct?: CssConfigurationV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CssConfigurationV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CssConfigurationV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CssConfigurationV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1 opentelekomcloud_css_configuration_v1}
*/
export class CssConfigurationV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_css_configuration_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssConfigurationV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssConfigurationV1 to import
  * @param importFromId The id of the existing CssConfigurationV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssConfigurationV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_css_configuration_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/css_configuration_v1 opentelekomcloud_css_configuration_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssConfigurationV1Config
  */
  public constructor(scope: Construct, id: string, config: CssConfigurationV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_css_configuration_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.44',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoCreateIndex = config.autoCreateIndex;
    this._clusterId = config.clusterId;
    this._httpCorsAllowCredentials = config.httpCorsAllowCredentials;
    this._httpCorsAllowHeaders = config.httpCorsAllowHeaders;
    this._httpCorsAllowMethods = config.httpCorsAllowMethods;
    this._httpCorsAllowOrigin = config.httpCorsAllowOrigin;
    this._httpCorsEnabled = config.httpCorsEnabled;
    this._httpCorsMaxAge = config.httpCorsMaxAge;
    this._id = config.id;
    this._indicesQueriesCacheSize = config.indicesQueriesCacheSize;
    this._reindexRemoteWhitelist = config.reindexRemoteWhitelist;
    this._threadPoolForceMergeSize = config.threadPoolForceMergeSize;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_create_index - computed: true, optional: true, required: false
  private _autoCreateIndex?: string; 
  public get autoCreateIndex() {
    return this.getStringAttribute('auto_create_index');
  }
  public set autoCreateIndex(value: string) {
    this._autoCreateIndex = value;
  }
  public resetAutoCreateIndex() {
    this._autoCreateIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateIndexInput() {
    return this._autoCreateIndex;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // http_cors_allow_credentials - computed: true, optional: true, required: false
  private _httpCorsAllowCredentials?: string; 
  public get httpCorsAllowCredentials() {
    return this.getStringAttribute('http_cors_allow_credentials');
  }
  public set httpCorsAllowCredentials(value: string) {
    this._httpCorsAllowCredentials = value;
  }
  public resetHttpCorsAllowCredentials() {
    this._httpCorsAllowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCorsAllowCredentialsInput() {
    return this._httpCorsAllowCredentials;
  }

  // http_cors_allow_headers - computed: true, optional: true, required: false
  private _httpCorsAllowHeaders?: string; 
  public get httpCorsAllowHeaders() {
    return this.getStringAttribute('http_cors_allow_headers');
  }
  public set httpCorsAllowHeaders(value: string) {
    this._httpCorsAllowHeaders = value;
  }
  public resetHttpCorsAllowHeaders() {
    this._httpCorsAllowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCorsAllowHeadersInput() {
    return this._httpCorsAllowHeaders;
  }

  // http_cors_allow_methods - computed: true, optional: true, required: false
  private _httpCorsAllowMethods?: string; 
  public get httpCorsAllowMethods() {
    return this.getStringAttribute('http_cors_allow_methods');
  }
  public set httpCorsAllowMethods(value: string) {
    this._httpCorsAllowMethods = value;
  }
  public resetHttpCorsAllowMethods() {
    this._httpCorsAllowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCorsAllowMethodsInput() {
    return this._httpCorsAllowMethods;
  }

  // http_cors_allow_origin - computed: true, optional: true, required: false
  private _httpCorsAllowOrigin?: string; 
  public get httpCorsAllowOrigin() {
    return this.getStringAttribute('http_cors_allow_origin');
  }
  public set httpCorsAllowOrigin(value: string) {
    this._httpCorsAllowOrigin = value;
  }
  public resetHttpCorsAllowOrigin() {
    this._httpCorsAllowOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCorsAllowOriginInput() {
    return this._httpCorsAllowOrigin;
  }

  // http_cors_enabled - computed: true, optional: true, required: false
  private _httpCorsEnabled?: string; 
  public get httpCorsEnabled() {
    return this.getStringAttribute('http_cors_enabled');
  }
  public set httpCorsEnabled(value: string) {
    this._httpCorsEnabled = value;
  }
  public resetHttpCorsEnabled() {
    this._httpCorsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCorsEnabledInput() {
    return this._httpCorsEnabled;
  }

  // http_cors_max_age - computed: true, optional: true, required: false
  private _httpCorsMaxAge?: string; 
  public get httpCorsMaxAge() {
    return this.getStringAttribute('http_cors_max_age');
  }
  public set httpCorsMaxAge(value: string) {
    this._httpCorsMaxAge = value;
  }
  public resetHttpCorsMaxAge() {
    this._httpCorsMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCorsMaxAgeInput() {
    return this._httpCorsMaxAge;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // indices_queries_cache_size - computed: true, optional: true, required: false
  private _indicesQueriesCacheSize?: string; 
  public get indicesQueriesCacheSize() {
    return this.getStringAttribute('indices_queries_cache_size');
  }
  public set indicesQueriesCacheSize(value: string) {
    this._indicesQueriesCacheSize = value;
  }
  public resetIndicesQueriesCacheSize() {
    this._indicesQueriesCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesQueriesCacheSizeInput() {
    return this._indicesQueriesCacheSize;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // reindex_remote_whitelist - computed: true, optional: true, required: false
  private _reindexRemoteWhitelist?: string; 
  public get reindexRemoteWhitelist() {
    return this.getStringAttribute('reindex_remote_whitelist');
  }
  public set reindexRemoteWhitelist(value: string) {
    this._reindexRemoteWhitelist = value;
  }
  public resetReindexRemoteWhitelist() {
    this._reindexRemoteWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reindexRemoteWhitelistInput() {
    return this._reindexRemoteWhitelist;
  }

  // thread_pool_force_merge_size - computed: true, optional: true, required: false
  private _threadPoolForceMergeSize?: string; 
  public get threadPoolForceMergeSize() {
    return this.getStringAttribute('thread_pool_force_merge_size');
  }
  public set threadPoolForceMergeSize(value: string) {
    this._threadPoolForceMergeSize = value;
  }
  public resetThreadPoolForceMergeSize() {
    this._threadPoolForceMergeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolForceMergeSizeInput() {
    return this._threadPoolForceMergeSize;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CssConfigurationV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CssConfigurationV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_create_index: cdktf.stringToTerraform(this._autoCreateIndex),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      http_cors_allow_credentials: cdktf.stringToTerraform(this._httpCorsAllowCredentials),
      http_cors_allow_headers: cdktf.stringToTerraform(this._httpCorsAllowHeaders),
      http_cors_allow_methods: cdktf.stringToTerraform(this._httpCorsAllowMethods),
      http_cors_allow_origin: cdktf.stringToTerraform(this._httpCorsAllowOrigin),
      http_cors_enabled: cdktf.stringToTerraform(this._httpCorsEnabled),
      http_cors_max_age: cdktf.stringToTerraform(this._httpCorsMaxAge),
      id: cdktf.stringToTerraform(this._id),
      indices_queries_cache_size: cdktf.stringToTerraform(this._indicesQueriesCacheSize),
      reindex_remote_whitelist: cdktf.stringToTerraform(this._reindexRemoteWhitelist),
      thread_pool_force_merge_size: cdktf.stringToTerraform(this._threadPoolForceMergeSize),
      timeouts: cssConfigurationV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_create_index: {
        value: cdktf.stringToHclTerraform(this._autoCreateIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_cors_allow_credentials: {
        value: cdktf.stringToHclTerraform(this._httpCorsAllowCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_cors_allow_headers: {
        value: cdktf.stringToHclTerraform(this._httpCorsAllowHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_cors_allow_methods: {
        value: cdktf.stringToHclTerraform(this._httpCorsAllowMethods),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_cors_allow_origin: {
        value: cdktf.stringToHclTerraform(this._httpCorsAllowOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_cors_enabled: {
        value: cdktf.stringToHclTerraform(this._httpCorsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_cors_max_age: {
        value: cdktf.stringToHclTerraform(this._httpCorsMaxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indices_queries_cache_size: {
        value: cdktf.stringToHclTerraform(this._indicesQueriesCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reindex_remote_whitelist: {
        value: cdktf.stringToHclTerraform(this._reindexRemoteWhitelist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thread_pool_force_merge_size: {
        value: cdktf.stringToHclTerraform(this._threadPoolForceMergeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cssConfigurationV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CssConfigurationV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
