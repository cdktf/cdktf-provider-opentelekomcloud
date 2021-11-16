// https://www.terraform.io/docs/providers/opentelekomcloud/d/obs_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudObsBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/obs_bucket.html#bucket DataOpentelekomcloudObsBucket#bucket}
  */
  readonly bucket: string;
}
export class DataOpentelekomcloudObsBucketCorsRule extends cdktf.ComplexComputedList {

  // allowed_headers - computed: true, optional: false, required: false
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }

  // allowed_methods - computed: true, optional: false, required: false
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // expose_headers - computed: true, optional: false, required: false
  public get exposeHeaders() {
    return this.getListAttribute('expose_headers');
  }

  // max_age_seconds - computed: true, optional: false, required: false
  public get maxAgeSeconds() {
    return this.getNumberAttribute('max_age_seconds');
  }
}
export class DataOpentelekomcloudObsBucketEventNotificationsFilterRule extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataOpentelekomcloudObsBucketEventNotifications extends cdktf.ComplexComputedList {

  // events - computed: true, optional: false, required: false
  public get events() {
    return this.getListAttribute('events');
  }

  // filter_rule - computed: true, optional: false, required: false
  public get filterRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter_rule') as any;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}
export class DataOpentelekomcloudObsBucketLifecycleRuleExpiration extends cdktf.ComplexComputedList {

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }
}
export class DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionExpiration extends cdktf.ComplexComputedList {

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }
}
export class DataOpentelekomcloudObsBucketLifecycleRuleNoncurrentVersionTransition extends cdktf.ComplexComputedList {

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
}
export class DataOpentelekomcloudObsBucketLifecycleRuleTransition extends cdktf.ComplexComputedList {

  // days - computed: true, optional: false, required: false
  public get days() {
    return this.getNumberAttribute('days');
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
}
export class DataOpentelekomcloudObsBucketLifecycleRule extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('expiration') as any;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // noncurrent_version_expiration - computed: true, optional: false, required: false
  public get noncurrentVersionExpiration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('noncurrent_version_expiration') as any;
  }

  // noncurrent_version_transition - computed: true, optional: false, required: false
  public get noncurrentVersionTransition() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('noncurrent_version_transition') as any;
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // transition - computed: true, optional: false, required: false
  public get transition() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('transition') as any;
  }
}
export class DataOpentelekomcloudObsBucketLogging extends cdktf.ComplexComputedList {

  // target_bucket - computed: true, optional: false, required: false
  public get targetBucket() {
    return this.getStringAttribute('target_bucket');
  }

  // target_prefix - computed: true, optional: false, required: false
  public get targetPrefix() {
    return this.getStringAttribute('target_prefix');
  }
}
export class DataOpentelekomcloudObsBucketServerSideEncryption extends cdktf.ComplexComputedList {

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}
export class DataOpentelekomcloudObsBucketWebsite extends cdktf.ComplexComputedList {

  // error_document - computed: true, optional: false, required: false
  public get errorDocument() {
    return this.getStringAttribute('error_document');
  }

  // index_document - computed: true, optional: false, required: false
  public get indexDocument() {
    return this.getStringAttribute('index_document');
  }

  // redirect_all_requests_to - computed: true, optional: false, required: false
  public get redirectAllRequestsTo() {
    return this.getStringAttribute('redirect_all_requests_to');
  }

  // routing_rules - computed: true, optional: false, required: false
  public get routingRules() {
    return this.getStringAttribute('routing_rules');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/obs_bucket.html opentelekomcloud_obs_bucket}
*/
export class DataOpentelekomcloudObsBucket extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_obs_bucket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/obs_bucket.html opentelekomcloud_obs_bucket} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudObsBucketConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudObsBucketConfig) {
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
    this._bucket = config.bucket;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cors_rule - computed: true, optional: false, required: false
  public corsRule(index: string) {
    return new DataOpentelekomcloudObsBucketCorsRule(this, 'cors_rule', index);
  }

  // event_notifications - computed: true, optional: false, required: false
  public eventNotifications(index: string) {
    return new DataOpentelekomcloudObsBucketEventNotifications(this, 'event_notifications', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_rule - computed: true, optional: false, required: false
  public lifecycleRule(index: string) {
    return new DataOpentelekomcloudObsBucketLifecycleRule(this, 'lifecycle_rule', index);
  }

  // logging - computed: true, optional: false, required: false
  public logging(index: string) {
    return new DataOpentelekomcloudObsBucketLogging(this, 'logging', index);
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // server_side_encryption - computed: true, optional: false, required: false
  public serverSideEncryption(index: string) {
    return new DataOpentelekomcloudObsBucketServerSideEncryption(this, 'server_side_encryption', index);
  }

  // storage_class - computed: true, optional: false, required: false
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // versioning - computed: true, optional: false, required: false
  public get versioning() {
    return this.getBooleanAttribute('versioning') as any;
  }

  // website - computed: true, optional: false, required: false
  public website(index: string) {
    return new DataOpentelekomcloudObsBucketWebsite(this, 'website', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
    };
  }
}
