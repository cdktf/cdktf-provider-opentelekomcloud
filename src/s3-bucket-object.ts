// https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#acl S3BucketObject#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#bucket S3BucketObject#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#cache_control S3BucketObject#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#content S3BucketObject#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#content_disposition S3BucketObject#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#content_encoding S3BucketObject#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#content_language S3BucketObject#content_language}
  */
  readonly contentLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#content_type S3BucketObject#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#etag S3BucketObject#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#key S3BucketObject#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#server_side_encryption S3BucketObject#server_side_encryption}
  */
  readonly serverSideEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#source S3BucketObject#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#sse_kms_key_id S3BucketObject#sse_kms_key_id}
  */
  readonly sseKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html#website_redirect S3BucketObject#website_redirect}
  */
  readonly websiteRedirect?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html opentelekomcloud_s3_bucket_object}
*/
export class S3BucketObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_s3_bucket_object";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket_object.html opentelekomcloud_s3_bucket_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketObjectConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_s3_bucket_object',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acl = config.acl;
    this._bucket = config.bucket;
    this._cacheControl = config.cacheControl;
    this._content = config.content;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentLanguage = config.contentLanguage;
    this._contentType = config.contentType;
    this._etag = config.etag;
    this._key = config.key;
    this._serverSideEncryption = config.serverSideEncryption;
    this._source = config.source;
    this._sseKmsKeyId = config.sseKmsKeyId;
    this._websiteRedirect = config.websiteRedirect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: false, optional: true, required: false
  private _acl?: string | undefined; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string | undefined) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl
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
    return this._bucket
  }

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string | undefined; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string | undefined) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl
  }

  // content - computed: false, optional: true, required: false
  private _content?: string | undefined; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string | undefined) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string | undefined; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string | undefined) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string | undefined; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string | undefined) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding
  }

  // content_language - computed: false, optional: true, required: false
  private _contentLanguage?: string | undefined; 
  public get contentLanguage() {
    return this.getStringAttribute('content_language');
  }
  public set contentLanguage(value: string | undefined) {
    this._contentLanguage = value;
  }
  public resetContentLanguage() {
    this._contentLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLanguageInput() {
    return this._contentLanguage
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string | undefined; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string | undefined) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string | undefined; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string | undefined) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag
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
    return this._key
  }

  // server_side_encryption - computed: true, optional: true, required: false
  private _serverSideEncryption?: string | undefined; 
  public get serverSideEncryption() {
    return this.getStringAttribute('server_side_encryption');
  }
  public set serverSideEncryption(value: string | undefined) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption
  }

  // source - computed: false, optional: true, required: false
  private _source?: string | undefined; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string | undefined) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // sse_kms_key_id - computed: true, optional: true, required: false
  private _sseKmsKeyId?: string | undefined; 
  public get sseKmsKeyId() {
    return this.getStringAttribute('sse_kms_key_id');
  }
  public set sseKmsKeyId(value: string | undefined) {
    this._sseKmsKeyId = value;
  }
  public resetSseKmsKeyId() {
    this._sseKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsKeyIdInput() {
    return this._sseKmsKeyId
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // website_redirect - computed: false, optional: true, required: false
  private _websiteRedirect?: string | undefined; 
  public get websiteRedirect() {
    return this.getStringAttribute('website_redirect');
  }
  public set websiteRedirect(value: string | undefined) {
    this._websiteRedirect = value;
  }
  public resetWebsiteRedirect() {
    this._websiteRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteRedirectInput() {
    return this._websiteRedirect
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.stringToTerraform(this._acl),
      bucket: cdktf.stringToTerraform(this._bucket),
      cache_control: cdktf.stringToTerraform(this._cacheControl),
      content: cdktf.stringToTerraform(this._content),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_language: cdktf.stringToTerraform(this._contentLanguage),
      content_type: cdktf.stringToTerraform(this._contentType),
      etag: cdktf.stringToTerraform(this._etag),
      key: cdktf.stringToTerraform(this._key),
      server_side_encryption: cdktf.stringToTerraform(this._serverSideEncryption),
      source: cdktf.stringToTerraform(this._source),
      sse_kms_key_id: cdktf.stringToTerraform(this._sseKmsKeyId),
      website_redirect: cdktf.stringToTerraform(this._websiteRedirect),
    };
  }
}
