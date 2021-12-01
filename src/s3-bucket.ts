// https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#acl S3Bucket#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#bucket S3Bucket#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#bucket_prefix S3Bucket#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#force_destroy S3Bucket#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#hosted_zone_id S3Bucket#hosted_zone_id}
  */
  readonly hostedZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#policy S3Bucket#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#region S3Bucket#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#tags S3Bucket#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#website_domain S3Bucket#website_domain}
  */
  readonly websiteDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#website_endpoint S3Bucket#website_endpoint}
  */
  readonly websiteEndpoint?: string;
  /**
  * cors_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#cors_rule S3Bucket#cors_rule}
  */
  readonly corsRule?: S3BucketCorsRule[];
  /**
  * lifecycle_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#lifecycle_rule S3Bucket#lifecycle_rule}
  */
  readonly lifecycleRule?: S3BucketLifecycleRule[];
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#logging S3Bucket#logging}
  */
  readonly logging?: S3BucketLogging[];
  /**
  * versioning block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#versioning S3Bucket#versioning}
  */
  readonly versioning?: S3BucketVersioning;
  /**
  * website block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#website S3Bucket#website}
  */
  readonly website?: S3BucketWebsite;
}
export interface S3BucketCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#allowed_headers S3Bucket#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#allowed_methods S3Bucket#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#allowed_origins S3Bucket#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#expose_headers S3Bucket#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#max_age_seconds S3Bucket#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
}

export function s3BucketCorsRuleToTerraform(struct?: S3BucketCorsRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedOrigins),
    expose_headers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exposeHeaders),
    max_age_seconds: cdktf.numberToTerraform(struct!.maxAgeSeconds),
  }
}

export interface S3BucketLifecycleRuleExpiration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#date S3Bucket#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#days S3Bucket#days}
  */
  readonly days?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#expired_object_delete_marker S3Bucket#expired_object_delete_marker}
  */
  readonly expiredObjectDeleteMarker?: boolean | cdktf.IResolvable;
}

export function s3BucketLifecycleRuleExpirationToTerraform(struct?: S3BucketLifecycleRuleExpiration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    date: cdktf.stringToTerraform(struct!.date),
    days: cdktf.numberToTerraform(struct!.days),
    expired_object_delete_marker: cdktf.booleanToTerraform(struct!.expiredObjectDeleteMarker),
  }
}

export interface S3BucketLifecycleRuleNoncurrentVersionExpiration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#days S3Bucket#days}
  */
  readonly days?: number;
}

export function s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform(struct?: S3BucketLifecycleRuleNoncurrentVersionExpiration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}

export interface S3BucketLifecycleRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}
  */
  readonly abortIncompleteMultipartUploadDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#enabled S3Bucket#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#id S3Bucket#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#prefix S3Bucket#prefix}
  */
  readonly prefix?: string;
  /**
  * expiration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#expiration S3Bucket#expiration}
  */
  readonly expiration?: S3BucketLifecycleRuleExpiration[];
  /**
  * noncurrent_version_expiration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#noncurrent_version_expiration S3Bucket#noncurrent_version_expiration}
  */
  readonly noncurrentVersionExpiration?: S3BucketLifecycleRuleNoncurrentVersionExpiration[];
}

export function s3BucketLifecycleRuleToTerraform(struct?: S3BucketLifecycleRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abort_incomplete_multipart_upload_days: cdktf.numberToTerraform(struct!.abortIncompleteMultipartUploadDays),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    expiration: cdktf.listMapper(s3BucketLifecycleRuleExpirationToTerraform)(struct!.expiration),
    noncurrent_version_expiration: cdktf.listMapper(s3BucketLifecycleRuleNoncurrentVersionExpirationToTerraform)(struct!.noncurrentVersionExpiration),
  }
}

export interface S3BucketLogging {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#target_bucket S3Bucket#target_bucket}
  */
  readonly targetBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#target_prefix S3Bucket#target_prefix}
  */
  readonly targetPrefix?: string;
}

export function s3BucketLoggingToTerraform(struct?: S3BucketLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_bucket: cdktf.stringToTerraform(struct!.targetBucket),
    target_prefix: cdktf.stringToTerraform(struct!.targetPrefix),
  }
}

export interface S3BucketVersioning {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#enabled S3Bucket#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#mfa_delete S3Bucket#mfa_delete}
  */
  readonly mfaDelete?: boolean | cdktf.IResolvable;
}

export function s3BucketVersioningToTerraform(struct?: S3BucketVersioningOutputReference | S3BucketVersioning): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    mfa_delete: cdktf.booleanToTerraform(struct!.mfaDelete),
  }
}

export class S3BucketVersioningOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): S3BucketVersioning | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._mfaDelete) {
      hasAnyValues = true;
      internalValueResult.mfaDelete = this._mfaDelete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketVersioning | undefined) {
    if (value === undefined) {
      this._enabled = undefined;
      this._mfaDelete = undefined;
    }
    else {
      this._enabled = value.enabled;
      this._mfaDelete = value.mfaDelete;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // mfa_delete - computed: false, optional: true, required: false
  private _mfaDelete?: boolean | cdktf.IResolvable; 
  public get mfaDelete() {
    return this.getBooleanAttribute('mfa_delete') as any;
  }
  public set mfaDelete(value: boolean | cdktf.IResolvable) {
    this._mfaDelete = value;
  }
  public resetMfaDelete() {
    this._mfaDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaDeleteInput() {
    return this._mfaDelete;
  }
}
export interface S3BucketWebsite {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#error_document S3Bucket#error_document}
  */
  readonly errorDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#index_document S3Bucket#index_document}
  */
  readonly indexDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#redirect_all_requests_to S3Bucket#redirect_all_requests_to}
  */
  readonly redirectAllRequestsTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html#routing_rules S3Bucket#routing_rules}
  */
  readonly routingRules?: string;
}

export function s3BucketWebsiteToTerraform(struct?: S3BucketWebsiteOutputReference | S3BucketWebsite): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_document: cdktf.stringToTerraform(struct!.errorDocument),
    index_document: cdktf.stringToTerraform(struct!.indexDocument),
    redirect_all_requests_to: cdktf.stringToTerraform(struct!.redirectAllRequestsTo),
    routing_rules: cdktf.stringToTerraform(struct!.routingRules),
  }
}

export class S3BucketWebsiteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): S3BucketWebsite | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._errorDocument) {
      hasAnyValues = true;
      internalValueResult.errorDocument = this._errorDocument;
    }
    if (this._indexDocument) {
      hasAnyValues = true;
      internalValueResult.indexDocument = this._indexDocument;
    }
    if (this._redirectAllRequestsTo) {
      hasAnyValues = true;
      internalValueResult.redirectAllRequestsTo = this._redirectAllRequestsTo;
    }
    if (this._routingRules) {
      hasAnyValues = true;
      internalValueResult.routingRules = this._routingRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsite | undefined) {
    if (value === undefined) {
      this._errorDocument = undefined;
      this._indexDocument = undefined;
      this._redirectAllRequestsTo = undefined;
      this._routingRules = undefined;
    }
    else {
      this._errorDocument = value.errorDocument;
      this._indexDocument = value.indexDocument;
      this._redirectAllRequestsTo = value.redirectAllRequestsTo;
      this._routingRules = value.routingRules;
    }
  }

  // error_document - computed: false, optional: true, required: false
  private _errorDocument?: string; 
  public get errorDocument() {
    return this.getStringAttribute('error_document');
  }
  public set errorDocument(value: string) {
    this._errorDocument = value;
  }
  public resetErrorDocument() {
    this._errorDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDocumentInput() {
    return this._errorDocument;
  }

  // index_document - computed: false, optional: true, required: false
  private _indexDocument?: string; 
  public get indexDocument() {
    return this.getStringAttribute('index_document');
  }
  public set indexDocument(value: string) {
    this._indexDocument = value;
  }
  public resetIndexDocument() {
    this._indexDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDocumentInput() {
    return this._indexDocument;
  }

  // redirect_all_requests_to - computed: false, optional: true, required: false
  private _redirectAllRequestsTo?: string; 
  public get redirectAllRequestsTo() {
    return this.getStringAttribute('redirect_all_requests_to');
  }
  public set redirectAllRequestsTo(value: string) {
    this._redirectAllRequestsTo = value;
  }
  public resetRedirectAllRequestsTo() {
    this._redirectAllRequestsTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectAllRequestsToInput() {
    return this._redirectAllRequestsTo;
  }

  // routing_rules - computed: false, optional: true, required: false
  private _routingRules?: string; 
  public get routingRules() {
    return this.getStringAttribute('routing_rules');
  }
  public set routingRules(value: string) {
    this._routingRules = value;
  }
  public resetRoutingRules() {
    this._routingRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRulesInput() {
    return this._routingRules;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html opentelekomcloud_s3_bucket}
*/
export class S3Bucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_s3_bucket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/s3_bucket.html opentelekomcloud_s3_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketConfig = {}
  */
  public constructor(scope: Construct, id: string, config: S3BucketConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_s3_bucket',
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
    this._bucketPrefix = config.bucketPrefix;
    this._forceDestroy = config.forceDestroy;
    this._hostedZoneId = config.hostedZoneId;
    this._policy = config.policy;
    this._region = config.region;
    this._tags = config.tags;
    this._websiteDomain = config.websiteDomain;
    this._websiteEndpoint = config.websiteEndpoint;
    this._corsRule = config.corsRule;
    this._lifecycleRule = config.lifecycleRule;
    this._logging = config.logging;
    this._versioning.internalValue = config.versioning;
    this._website.internalValue = config.website;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // bucket_domain_name - computed: true, optional: false, required: false
  public get bucketDomainName() {
    return this.getStringAttribute('bucket_domain_name');
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy') as any;
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // hosted_zone_id - computed: true, optional: true, required: false
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  public resetHostedZoneId() {
    this._hostedZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // website_domain - computed: true, optional: true, required: false
  private _websiteDomain?: string; 
  public get websiteDomain() {
    return this.getStringAttribute('website_domain');
  }
  public set websiteDomain(value: string) {
    this._websiteDomain = value;
  }
  public resetWebsiteDomain() {
    this._websiteDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteDomainInput() {
    return this._websiteDomain;
  }

  // website_endpoint - computed: true, optional: true, required: false
  private _websiteEndpoint?: string; 
  public get websiteEndpoint() {
    return this.getStringAttribute('website_endpoint');
  }
  public set websiteEndpoint(value: string) {
    this._websiteEndpoint = value;
  }
  public resetWebsiteEndpoint() {
    this._websiteEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteEndpointInput() {
    return this._websiteEndpoint;
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule?: S3BucketCorsRule[]; 
  public get corsRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cors_rule') as any;
  }
  public set corsRule(value: S3BucketCorsRule[]) {
    this._corsRule = value;
  }
  public resetCorsRule() {
    this._corsRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule;
  }

  // lifecycle_rule - computed: false, optional: true, required: false
  private _lifecycleRule?: S3BucketLifecycleRule[]; 
  public get lifecycleRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lifecycle_rule') as any;
  }
  public set lifecycleRule(value: S3BucketLifecycleRule[]) {
    this._lifecycleRule = value;
  }
  public resetLifecycleRule() {
    this._lifecycleRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRuleInput() {
    return this._lifecycleRule;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: S3BucketLogging[]; 
  public get logging() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('logging') as any;
  }
  public set logging(value: S3BucketLogging[]) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // versioning - computed: false, optional: true, required: false
  private _versioning = new S3BucketVersioningOutputReference(this as any, "versioning", true);
  public get versioning() {
    return this._versioning;
  }
  public putVersioning(value: S3BucketVersioning) {
    this._versioning.internalValue = value;
  }
  public resetVersioning() {
    this._versioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningInput() {
    return this._versioning.internalValue;
  }

  // website - computed: false, optional: true, required: false
  private _website = new S3BucketWebsiteOutputReference(this as any, "website", true);
  public get website() {
    return this._website;
  }
  public putWebsite(value: S3BucketWebsite) {
    this._website.internalValue = value;
  }
  public resetWebsite() {
    this._website.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.stringToTerraform(this._acl),
      bucket: cdktf.stringToTerraform(this._bucket),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
      policy: cdktf.stringToTerraform(this._policy),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      website_domain: cdktf.stringToTerraform(this._websiteDomain),
      website_endpoint: cdktf.stringToTerraform(this._websiteEndpoint),
      cors_rule: cdktf.listMapper(s3BucketCorsRuleToTerraform)(this._corsRule),
      lifecycle_rule: cdktf.listMapper(s3BucketLifecycleRuleToTerraform)(this._lifecycleRule),
      logging: cdktf.listMapper(s3BucketLoggingToTerraform)(this._logging),
      versioning: s3BucketVersioningToTerraform(this._versioning.internalValue),
      website: s3BucketWebsiteToTerraform(this._website.internalValue),
    };
  }
}
