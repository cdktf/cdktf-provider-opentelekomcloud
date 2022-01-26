// https://www.terraform.io/docs/providers/opentelekomcloud/d/obs_bucket_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudObsBucketObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/obs_bucket_object#bucket DataOpentelekomcloudObsBucketObject#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/obs_bucket_object#key DataOpentelekomcloudObsBucketObject#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/obs_bucket_object#version_id DataOpentelekomcloudObsBucketObject#version_id}
  */
  readonly versionId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/obs_bucket_object opentelekomcloud_obs_bucket_object}
*/
export class DataOpentelekomcloudObsBucketObject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_obs_bucket_object";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/obs_bucket_object opentelekomcloud_obs_bucket_object} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudObsBucketObjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudObsBucketObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_obs_bucket_object',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._key = config.key;
    this._versionId = config.versionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // cache_control - computed: true, optional: false, required: false
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }

  // content_disposition - computed: true, optional: false, required: false
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }

  // content_encoding - computed: true, optional: false, required: false
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }

  // content_language - computed: true, optional: false, required: false
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }

  // content_length - computed: true, optional: false, required: false
  public get contentLength() {
    return this.getNumberAttribute('content_length');
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'metadata').lookup(key);
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // website_redirect_location - computed: true, optional: false, required: false
  public get websiteRedirectLocation() {
    return this.getStringAttribute('website_redirect_location');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      key: cdktf.stringToTerraform(this._key),
      version_id: cdktf.stringToTerraform(this._versionId),
    };
  }
}
