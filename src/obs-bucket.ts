// https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObsBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#acl ObsBucket#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#bucket ObsBucket#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#force_destroy ObsBucket#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#region ObsBucket#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#storage_class ObsBucket#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#tags ObsBucket#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#versioning ObsBucket#versioning}
  */
  readonly versioning?: boolean | cdktf.IResolvable;
  /**
  * cors_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#cors_rule ObsBucket#cors_rule}
  */
  readonly corsRule?: ObsBucketCorsRule[];
  /**
  * event_notifications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#event_notifications ObsBucket#event_notifications}
  */
  readonly eventNotifications?: ObsBucketEventNotifications[];
  /**
  * lifecycle_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#lifecycle_rule ObsBucket#lifecycle_rule}
  */
  readonly lifecycleRule?: ObsBucketLifecycleRule[];
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#logging ObsBucket#logging}
  */
  readonly logging?: ObsBucketLogging[];
  /**
  * server_side_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#server_side_encryption ObsBucket#server_side_encryption}
  */
  readonly serverSideEncryption?: ObsBucketServerSideEncryption;
  /**
  * website block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#website ObsBucket#website}
  */
  readonly website?: ObsBucketWebsite;
}
export interface ObsBucketCorsRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#allowed_headers ObsBucket#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#allowed_methods ObsBucket#allowed_methods}
  */
  readonly allowedMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#allowed_origins ObsBucket#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#expose_headers ObsBucket#expose_headers}
  */
  readonly exposeHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#max_age_seconds ObsBucket#max_age_seconds}
  */
  readonly maxAgeSeconds?: number;
}

function obsBucketCorsRuleToTerraform(struct?: ObsBucketCorsRule): any {
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

export interface ObsBucketEventNotificationsFilterRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#name ObsBucket#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#value ObsBucket#value}
  */
  readonly value?: string;
}

function obsBucketEventNotificationsFilterRuleToTerraform(struct?: ObsBucketEventNotificationsFilterRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ObsBucketEventNotifications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#events ObsBucket#events}
  */
  readonly events: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#id ObsBucket#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#topic ObsBucket#topic}
  */
  readonly topic: string;
  /**
  * filter_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#filter_rule ObsBucket#filter_rule}
  */
  readonly filterRule?: ObsBucketEventNotificationsFilterRule[];
}

function obsBucketEventNotificationsToTerraform(struct?: ObsBucketEventNotifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    topic: cdktf.stringToTerraform(struct!.topic),
    filter_rule: cdktf.listMapper(obsBucketEventNotificationsFilterRuleToTerraform)(struct!.filterRule),
  }
}

export interface ObsBucketLifecycleRuleExpiration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#days ObsBucket#days}
  */
  readonly days: number;
}

function obsBucketLifecycleRuleExpirationToTerraform(struct?: ObsBucketLifecycleRuleExpiration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}

export interface ObsBucketLifecycleRuleNoncurrentVersionExpiration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#days ObsBucket#days}
  */
  readonly days: number;
}

function obsBucketLifecycleRuleNoncurrentVersionExpirationToTerraform(struct?: ObsBucketLifecycleRuleNoncurrentVersionExpiration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}

export interface ObsBucketLifecycleRuleNoncurrentVersionTransition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#days ObsBucket#days}
  */
  readonly days: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#storage_class ObsBucket#storage_class}
  */
  readonly storageClass: string;
}

function obsBucketLifecycleRuleNoncurrentVersionTransitionToTerraform(struct?: ObsBucketLifecycleRuleNoncurrentVersionTransition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}

export interface ObsBucketLifecycleRuleTransition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#days ObsBucket#days}
  */
  readonly days: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#storage_class ObsBucket#storage_class}
  */
  readonly storageClass: string;
}

function obsBucketLifecycleRuleTransitionToTerraform(struct?: ObsBucketLifecycleRuleTransition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}

export interface ObsBucketLifecycleRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#enabled ObsBucket#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#name ObsBucket#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#prefix ObsBucket#prefix}
  */
  readonly prefix?: string;
  /**
  * expiration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#expiration ObsBucket#expiration}
  */
  readonly expiration?: ObsBucketLifecycleRuleExpiration[];
  /**
  * noncurrent_version_expiration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#noncurrent_version_expiration ObsBucket#noncurrent_version_expiration}
  */
  readonly noncurrentVersionExpiration?: ObsBucketLifecycleRuleNoncurrentVersionExpiration[];
  /**
  * noncurrent_version_transition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#noncurrent_version_transition ObsBucket#noncurrent_version_transition}
  */
  readonly noncurrentVersionTransition?: ObsBucketLifecycleRuleNoncurrentVersionTransition[];
  /**
  * transition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#transition ObsBucket#transition}
  */
  readonly transition?: ObsBucketLifecycleRuleTransition[];
}

function obsBucketLifecycleRuleToTerraform(struct?: ObsBucketLifecycleRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    expiration: cdktf.listMapper(obsBucketLifecycleRuleExpirationToTerraform)(struct!.expiration),
    noncurrent_version_expiration: cdktf.listMapper(obsBucketLifecycleRuleNoncurrentVersionExpirationToTerraform)(struct!.noncurrentVersionExpiration),
    noncurrent_version_transition: cdktf.listMapper(obsBucketLifecycleRuleNoncurrentVersionTransitionToTerraform)(struct!.noncurrentVersionTransition),
    transition: cdktf.listMapper(obsBucketLifecycleRuleTransitionToTerraform)(struct!.transition),
  }
}

export interface ObsBucketLogging {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#target_bucket ObsBucket#target_bucket}
  */
  readonly targetBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#target_prefix ObsBucket#target_prefix}
  */
  readonly targetPrefix?: string;
}

function obsBucketLoggingToTerraform(struct?: ObsBucketLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_bucket: cdktf.stringToTerraform(struct!.targetBucket),
    target_prefix: cdktf.stringToTerraform(struct!.targetPrefix),
  }
}

export interface ObsBucketServerSideEncryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#algorithm ObsBucket#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#kms_key_id ObsBucket#kms_key_id}
  */
  readonly kmsKeyId: string;
}

function obsBucketServerSideEncryptionToTerraform(struct?: ObsBucketServerSideEncryptionOutputReference | ObsBucketServerSideEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}

export class ObsBucketServerSideEncryptionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm
  }

  // kms_key_id - computed: false, optional: false, required: true
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }
}
export interface ObsBucketWebsite {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#error_document ObsBucket#error_document}
  */
  readonly errorDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#index_document ObsBucket#index_document}
  */
  readonly indexDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#redirect_all_requests_to ObsBucket#redirect_all_requests_to}
  */
  readonly redirectAllRequestsTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html#routing_rules ObsBucket#routing_rules}
  */
  readonly routingRules?: string;
}

function obsBucketWebsiteToTerraform(struct?: ObsBucketWebsiteOutputReference | ObsBucketWebsite): any {
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

export class ObsBucketWebsiteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // error_document - computed: false, optional: true, required: false
  private _errorDocument?: string | undefined; 
  public get errorDocument() {
    return this.getStringAttribute('error_document');
  }
  public set errorDocument(value: string | undefined) {
    this._errorDocument = value;
  }
  public resetErrorDocument() {
    this._errorDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDocumentInput() {
    return this._errorDocument
  }

  // index_document - computed: false, optional: true, required: false
  private _indexDocument?: string | undefined; 
  public get indexDocument() {
    return this.getStringAttribute('index_document');
  }
  public set indexDocument(value: string | undefined) {
    this._indexDocument = value;
  }
  public resetIndexDocument() {
    this._indexDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDocumentInput() {
    return this._indexDocument
  }

  // redirect_all_requests_to - computed: false, optional: true, required: false
  private _redirectAllRequestsTo?: string | undefined; 
  public get redirectAllRequestsTo() {
    return this.getStringAttribute('redirect_all_requests_to');
  }
  public set redirectAllRequestsTo(value: string | undefined) {
    this._redirectAllRequestsTo = value;
  }
  public resetRedirectAllRequestsTo() {
    this._redirectAllRequestsTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectAllRequestsToInput() {
    return this._redirectAllRequestsTo
  }

  // routing_rules - computed: false, optional: true, required: false
  private _routingRules?: string | undefined; 
  public get routingRules() {
    return this.getStringAttribute('routing_rules');
  }
  public set routingRules(value: string | undefined) {
    this._routingRules = value;
  }
  public resetRoutingRules() {
    this._routingRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRulesInput() {
    return this._routingRules
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html opentelekomcloud_obs_bucket}
*/
export class ObsBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_obs_bucket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/obs_bucket.html opentelekomcloud_obs_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObsBucketConfig
  */
  public constructor(scope: Construct, id: string, config: ObsBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_obs_bucket',
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
    this._forceDestroy = config.forceDestroy;
    this._region = config.region;
    this._storageClass = config.storageClass;
    this._tags = config.tags;
    this._versioning = config.versioning;
    this._corsRule = config.corsRule;
    this._eventNotifications = config.eventNotifications;
    this._lifecycleRule = config.lifecycleRule;
    this._logging = config.logging;
    this._serverSideEncryption = config.serverSideEncryption;
    this._website = config.website;
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

  // bucket_domain_name - computed: true, optional: false, required: false
  public get bucketDomainName() {
    return this.getStringAttribute('bucket_domain_name');
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy') as any;
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string | undefined; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string | undefined) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // versioning - computed: false, optional: true, required: false
  private _versioning?: boolean | cdktf.IResolvable | undefined; 
  public get versioning() {
    return this.getBooleanAttribute('versioning') as any;
  }
  public set versioning(value: boolean | cdktf.IResolvable | undefined) {
    this._versioning = value;
  }
  public resetVersioning() {
    this._versioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versioningInput() {
    return this._versioning
  }

  // cors_rule - computed: false, optional: true, required: false
  private _corsRule?: ObsBucketCorsRule[] | undefined; 
  public get corsRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cors_rule') as any;
  }
  public set corsRule(value: ObsBucketCorsRule[] | undefined) {
    this._corsRule = value;
  }
  public resetCorsRule() {
    this._corsRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsRuleInput() {
    return this._corsRule
  }

  // event_notifications - computed: false, optional: true, required: false
  private _eventNotifications?: ObsBucketEventNotifications[] | undefined; 
  public get eventNotifications() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('event_notifications') as any;
  }
  public set eventNotifications(value: ObsBucketEventNotifications[] | undefined) {
    this._eventNotifications = value;
  }
  public resetEventNotifications() {
    this._eventNotifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNotificationsInput() {
    return this._eventNotifications
  }

  // lifecycle_rule - computed: false, optional: true, required: false
  private _lifecycleRule?: ObsBucketLifecycleRule[] | undefined; 
  public get lifecycleRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lifecycle_rule') as any;
  }
  public set lifecycleRule(value: ObsBucketLifecycleRule[] | undefined) {
    this._lifecycleRule = value;
  }
  public resetLifecycleRule() {
    this._lifecycleRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRuleInput() {
    return this._lifecycleRule
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: ObsBucketLogging[] | undefined; 
  public get logging() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('logging') as any;
  }
  public set logging(value: ObsBucketLogging[] | undefined) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: ObsBucketServerSideEncryption | undefined; 
  private __serverSideEncryptionOutput = new ObsBucketServerSideEncryptionOutputReference(this as any, "server_side_encryption", true);
  public get serverSideEncryption() {
    return this.__serverSideEncryptionOutput;
  }
  public putServerSideEncryption(value: ObsBucketServerSideEncryption | undefined) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption
  }

  // website - computed: false, optional: true, required: false
  private _website?: ObsBucketWebsite | undefined; 
  private __websiteOutput = new ObsBucketWebsiteOutputReference(this as any, "website", true);
  public get website() {
    return this.__websiteOutput;
  }
  public putWebsite(value: ObsBucketWebsite | undefined) {
    this._website = value;
  }
  public resetWebsite() {
    this._website = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl: cdktf.stringToTerraform(this._acl),
      bucket: cdktf.stringToTerraform(this._bucket),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      region: cdktf.stringToTerraform(this._region),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      versioning: cdktf.booleanToTerraform(this._versioning),
      cors_rule: cdktf.listMapper(obsBucketCorsRuleToTerraform)(this._corsRule),
      event_notifications: cdktf.listMapper(obsBucketEventNotificationsToTerraform)(this._eventNotifications),
      lifecycle_rule: cdktf.listMapper(obsBucketLifecycleRuleToTerraform)(this._lifecycleRule),
      logging: cdktf.listMapper(obsBucketLoggingToTerraform)(this._logging),
      server_side_encryption: obsBucketServerSideEncryptionToTerraform(this._serverSideEncryption),
      website: obsBucketWebsiteToTerraform(this._website),
    };
  }
}
