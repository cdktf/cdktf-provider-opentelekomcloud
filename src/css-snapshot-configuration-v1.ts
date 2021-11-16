// https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssSnapshotConfigurationV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#automatic CssSnapshotConfigurationV1#automatic}
  */
  readonly automatic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#cluster_id CssSnapshotConfigurationV1#cluster_id}
  */
  readonly clusterId: string;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#configuration CssSnapshotConfigurationV1#configuration}
  */
  readonly configuration?: CssSnapshotConfigurationV1Configuration;
  /**
  * creation_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#creation_policy CssSnapshotConfigurationV1#creation_policy}
  */
  readonly creationPolicy?: CssSnapshotConfigurationV1CreationPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#timeouts CssSnapshotConfigurationV1#timeouts}
  */
  readonly timeouts?: CssSnapshotConfigurationV1Timeouts;
}
export interface CssSnapshotConfigurationV1Configuration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#agency CssSnapshotConfigurationV1#agency}
  */
  readonly agency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#bucket CssSnapshotConfigurationV1#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#kms_id CssSnapshotConfigurationV1#kms_id}
  */
  readonly kmsId?: string;
}

function cssSnapshotConfigurationV1ConfigurationToTerraform(struct?: CssSnapshotConfigurationV1ConfigurationOutputReference | CssSnapshotConfigurationV1Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agency: cdktf.stringToTerraform(struct!.agency),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    kms_id: cdktf.stringToTerraform(struct!.kmsId),
  }
}

export class CssSnapshotConfigurationV1ConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // agency - computed: false, optional: false, required: true
  private _agency?: string; 
  public get agency() {
    return this.getStringAttribute('agency');
  }
  public set agency(value: string) {
    this._agency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agencyInput() {
    return this._agency
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

  // kms_id - computed: false, optional: true, required: false
  private _kmsId?: string | undefined; 
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }
  public set kmsId(value: string | undefined) {
    this._kmsId = value;
  }
  public resetKmsId() {
    this._kmsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsIdInput() {
    return this._kmsId
  }
}
export interface CssSnapshotConfigurationV1CreationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#delete_auto CssSnapshotConfigurationV1#delete_auto}
  */
  readonly deleteAuto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#enable CssSnapshotConfigurationV1#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#keepday CssSnapshotConfigurationV1#keepday}
  */
  readonly keepday: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#period CssSnapshotConfigurationV1#period}
  */
  readonly period: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#prefix CssSnapshotConfigurationV1#prefix}
  */
  readonly prefix: string;
}

function cssSnapshotConfigurationV1CreationPolicyToTerraform(struct?: CssSnapshotConfigurationV1CreationPolicyOutputReference | CssSnapshotConfigurationV1CreationPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_auto: cdktf.booleanToTerraform(struct!.deleteAuto),
    enable: cdktf.booleanToTerraform(struct!.enable),
    keepday: cdktf.numberToTerraform(struct!.keepday),
    period: cdktf.stringToTerraform(struct!.period),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export class CssSnapshotConfigurationV1CreationPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // delete_auto - computed: false, optional: true, required: false
  private _deleteAuto?: boolean | cdktf.IResolvable | undefined; 
  public get deleteAuto() {
    return this.getBooleanAttribute('delete_auto') as any;
  }
  public set deleteAuto(value: boolean | cdktf.IResolvable | undefined) {
    this._deleteAuto = value;
  }
  public resetDeleteAuto() {
    this._deleteAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAutoInput() {
    return this._deleteAuto
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable') as any;
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable
  }

  // keepday - computed: false, optional: false, required: true
  private _keepday?: number; 
  public get keepday() {
    return this.getNumberAttribute('keepday');
  }
  public set keepday(value: number) {
    this._keepday = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepdayInput() {
    return this._keepday
  }

  // period - computed: false, optional: false, required: true
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix
  }
}
export interface CssSnapshotConfigurationV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#create CssSnapshotConfigurationV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html#update CssSnapshotConfigurationV1#update}
  */
  readonly update?: string;
}

function cssSnapshotConfigurationV1TimeoutsToTerraform(struct?: CssSnapshotConfigurationV1TimeoutsOutputReference | CssSnapshotConfigurationV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CssSnapshotConfigurationV1TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html opentelekomcloud_css_snapshot_configuration_v1}
*/
export class CssSnapshotConfigurationV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_css_snapshot_configuration_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_snapshot_configuration_v1.html opentelekomcloud_css_snapshot_configuration_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssSnapshotConfigurationV1Config
  */
  public constructor(scope: Construct, id: string, config: CssSnapshotConfigurationV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_css_snapshot_configuration_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._automatic = config.automatic;
    this._clusterId = config.clusterId;
    this._configuration = config.configuration;
    this._creationPolicy = config.creationPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic - computed: false, optional: true, required: false
  private _automatic?: boolean | cdktf.IResolvable | undefined; 
  public get automatic() {
    return this.getBooleanAttribute('automatic') as any;
  }
  public set automatic(value: boolean | cdktf.IResolvable | undefined) {
    this._automatic = value;
  }
  public resetAutomatic() {
    this._automatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic
  }

  // base_path - computed: true, optional: false, required: false
  public get basePath() {
    return this.getStringAttribute('base_path');
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
    return this._clusterId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: CssSnapshotConfigurationV1Configuration | undefined; 
  private __configurationOutput = new CssSnapshotConfigurationV1ConfigurationOutputReference(this as any, "configuration", true);
  public get configuration() {
    return this.__configurationOutput;
  }
  public putConfiguration(value: CssSnapshotConfigurationV1Configuration | undefined) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // creation_policy - computed: false, optional: true, required: false
  private _creationPolicy?: CssSnapshotConfigurationV1CreationPolicy | undefined; 
  private __creationPolicyOutput = new CssSnapshotConfigurationV1CreationPolicyOutputReference(this as any, "creation_policy", true);
  public get creationPolicy() {
    return this.__creationPolicyOutput;
  }
  public putCreationPolicy(value: CssSnapshotConfigurationV1CreationPolicy | undefined) {
    this._creationPolicy = value;
  }
  public resetCreationPolicy() {
    this._creationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationPolicyInput() {
    return this._creationPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CssSnapshotConfigurationV1Timeouts | undefined; 
  private __timeoutsOutput = new CssSnapshotConfigurationV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CssSnapshotConfigurationV1Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic: cdktf.booleanToTerraform(this._automatic),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      configuration: cssSnapshotConfigurationV1ConfigurationToTerraform(this._configuration),
      creation_policy: cssSnapshotConfigurationV1CreationPolicyToTerraform(this._creationPolicy),
      timeouts: cssSnapshotConfigurationV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
