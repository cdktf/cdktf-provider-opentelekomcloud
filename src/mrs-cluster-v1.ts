// https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MrsClusterV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}
  */
  readonly availableZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}
  */
  readonly billingType: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}
  */
  readonly clusterAdminSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}
  */
  readonly clusterType?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}
  */
  readonly coreDataVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}
  */
  readonly coreDataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}
  */
  readonly coreDataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}
  */
  readonly coreNodeNum: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}
  */
  readonly coreNodeSize: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}
  */
  readonly logCollection?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}
  */
  readonly masterDataVolumeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}
  */
  readonly masterDataVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}
  */
  readonly masterDataVolumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}
  */
  readonly masterNodeNum: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}
  */
  readonly masterNodeSize: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}
  */
  readonly nodePublicCertName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#region MrsClusterV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}
  */
  readonly safeMode: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#tags MrsClusterV1#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}
  */
  readonly volumeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}
  */
  readonly vpcId: string;
  /**
  * add_jobs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#add_jobs MrsClusterV1#add_jobs}
  */
  readonly addJobs?: MrsClusterV1AddJobs[] | cdktf.IResolvable;
  /**
  * bootstrap_scripts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#bootstrap_scripts MrsClusterV1#bootstrap_scripts}
  */
  readonly bootstrapScripts?: MrsClusterV1BootstrapScripts[] | cdktf.IResolvable;
  /**
  * component_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#component_list MrsClusterV1#component_list}
  */
  readonly componentList: MrsClusterV1ComponentList[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#timeouts MrsClusterV1#timeouts}
  */
  readonly timeouts?: MrsClusterV1Timeouts;
}
export interface MrsClusterV1AddJobs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#arguments MrsClusterV1#arguments}
  */
  readonly arguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#file_action MrsClusterV1#file_action}
  */
  readonly fileAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#hive_script_path MrsClusterV1#hive_script_path}
  */
  readonly hiveScriptPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#hql MrsClusterV1#hql}
  */
  readonly hql?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#input MrsClusterV1#input}
  */
  readonly input?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#jar_path MrsClusterV1#jar_path}
  */
  readonly jarPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#job_log MrsClusterV1#job_log}
  */
  readonly jobLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#job_name MrsClusterV1#job_name}
  */
  readonly jobName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#job_type MrsClusterV1#job_type}
  */
  readonly jobType: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#output MrsClusterV1#output}
  */
  readonly output?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#shutdown_cluster MrsClusterV1#shutdown_cluster}
  */
  readonly shutdownCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#submit_job_once_cluster_run MrsClusterV1#submit_job_once_cluster_run}
  */
  readonly submitJobOnceClusterRun: boolean | cdktf.IResolvable;
}

export function mrsClusterV1AddJobsToTerraform(struct?: MrsClusterV1AddJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.stringToTerraform(struct!.arguments),
    file_action: cdktf.stringToTerraform(struct!.fileAction),
    hive_script_path: cdktf.stringToTerraform(struct!.hiveScriptPath),
    hql: cdktf.stringToTerraform(struct!.hql),
    input: cdktf.stringToTerraform(struct!.input),
    jar_path: cdktf.stringToTerraform(struct!.jarPath),
    job_log: cdktf.stringToTerraform(struct!.jobLog),
    job_name: cdktf.stringToTerraform(struct!.jobName),
    job_type: cdktf.numberToTerraform(struct!.jobType),
    output: cdktf.stringToTerraform(struct!.output),
    shutdown_cluster: cdktf.booleanToTerraform(struct!.shutdownCluster),
    submit_job_once_cluster_run: cdktf.booleanToTerraform(struct!.submitJobOnceClusterRun),
  }
}

export interface MrsClusterV1BootstrapScripts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#active_master MrsClusterV1#active_master}
  */
  readonly activeMaster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#before_component_start MrsClusterV1#before_component_start}
  */
  readonly beforeComponentStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#fail_action MrsClusterV1#fail_action}
  */
  readonly failAction: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#name MrsClusterV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#nodes MrsClusterV1#nodes}
  */
  readonly nodes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#parameters MrsClusterV1#parameters}
  */
  readonly parameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#uri MrsClusterV1#uri}
  */
  readonly uri: string;
}

export function mrsClusterV1BootstrapScriptsToTerraform(struct?: MrsClusterV1BootstrapScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_master: cdktf.booleanToTerraform(struct!.activeMaster),
    before_component_start: cdktf.booleanToTerraform(struct!.beforeComponentStart),
    fail_action: cdktf.stringToTerraform(struct!.failAction),
    name: cdktf.stringToTerraform(struct!.name),
    nodes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nodes),
    parameters: cdktf.stringToTerraform(struct!.parameters),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export interface MrsClusterV1ComponentList {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#component_name MrsClusterV1#component_name}
  */
  readonly componentName: string;
}

export function mrsClusterV1ComponentListToTerraform(struct?: MrsClusterV1ComponentList | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_name: cdktf.stringToTerraform(struct!.componentName),
  }
}

export interface MrsClusterV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#create MrsClusterV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1#delete MrsClusterV1#delete}
  */
  readonly delete?: string;
}

export function mrsClusterV1TimeoutsToTerraform(struct?: MrsClusterV1TimeoutsOutputReference | MrsClusterV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class MrsClusterV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MrsClusterV1Timeouts | undefined {
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

  public set internalValue(value: MrsClusterV1Timeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1 opentelekomcloud_mrs_cluster_v1}
*/
export class MrsClusterV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_mrs_cluster_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/mrs_cluster_v1 opentelekomcloud_mrs_cluster_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MrsClusterV1Config
  */
  public constructor(scope: Construct, id: string, config: MrsClusterV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_mrs_cluster_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.29.1',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availableZoneId = config.availableZoneId;
    this._billingType = config.billingType;
    this._clusterAdminSecret = config.clusterAdminSecret;
    this._clusterName = config.clusterName;
    this._clusterType = config.clusterType;
    this._clusterVersion = config.clusterVersion;
    this._coreDataVolumeCount = config.coreDataVolumeCount;
    this._coreDataVolumeSize = config.coreDataVolumeSize;
    this._coreDataVolumeType = config.coreDataVolumeType;
    this._coreNodeNum = config.coreNodeNum;
    this._coreNodeSize = config.coreNodeSize;
    this._logCollection = config.logCollection;
    this._masterDataVolumeCount = config.masterDataVolumeCount;
    this._masterDataVolumeSize = config.masterDataVolumeSize;
    this._masterDataVolumeType = config.masterDataVolumeType;
    this._masterNodeNum = config.masterNodeNum;
    this._masterNodeSize = config.masterNodeSize;
    this._nodePublicCertName = config.nodePublicCertName;
    this._region = config.region;
    this._safeMode = config.safeMode;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._volumeSize = config.volumeSize;
    this._volumeType = config.volumeType;
    this._vpcId = config.vpcId;
    this._addJobs = config.addJobs;
    this._bootstrapScripts = config.bootstrapScripts;
    this._componentList = config.componentList;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_zone_id - computed: false, optional: false, required: true
  private _availableZoneId?: string; 
  public get availableZoneId() {
    return this.getStringAttribute('available_zone_id');
  }
  public set availableZoneId(value: string) {
    this._availableZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availableZoneIdInput() {
    return this._availableZoneId;
  }

  // available_zone_name - computed: true, optional: false, required: false
  public get availableZoneName() {
    return this.getStringAttribute('available_zone_name');
  }

  // billing_type - computed: false, optional: false, required: true
  private _billingType?: number; 
  public get billingType() {
    return this.getNumberAttribute('billing_type');
  }
  public set billingType(value: number) {
    this._billingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTypeInput() {
    return this._billingType;
  }

  // charging_start_time - computed: true, optional: false, required: false
  public get chargingStartTime() {
    return this.getStringAttribute('charging_start_time');
  }

  // cluster_admin_secret - computed: true, optional: true, required: false
  private _clusterAdminSecret?: string; 
  public get clusterAdminSecret() {
    return this.getStringAttribute('cluster_admin_secret');
  }
  public set clusterAdminSecret(value: string) {
    this._clusterAdminSecret = value;
  }
  public resetClusterAdminSecret() {
    this._clusterAdminSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAdminSecretInput() {
    return this._clusterAdminSecret;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_state - computed: true, optional: false, required: false
  public get clusterState() {
    return this.getStringAttribute('cluster_state');
  }

  // cluster_type - computed: true, optional: true, required: false
  private _clusterType?: number; 
  public get clusterType() {
    return this.getNumberAttribute('cluster_type');
  }
  public set clusterType(value: number) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // cluster_version - computed: false, optional: false, required: true
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // core_data_volume_count - computed: true, optional: true, required: false
  private _coreDataVolumeCount?: number; 
  public get coreDataVolumeCount() {
    return this.getNumberAttribute('core_data_volume_count');
  }
  public set coreDataVolumeCount(value: number) {
    this._coreDataVolumeCount = value;
  }
  public resetCoreDataVolumeCount() {
    this._coreDataVolumeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDataVolumeCountInput() {
    return this._coreDataVolumeCount;
  }

  // core_data_volume_size - computed: true, optional: true, required: false
  private _coreDataVolumeSize?: number; 
  public get coreDataVolumeSize() {
    return this.getNumberAttribute('core_data_volume_size');
  }
  public set coreDataVolumeSize(value: number) {
    this._coreDataVolumeSize = value;
  }
  public resetCoreDataVolumeSize() {
    this._coreDataVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDataVolumeSizeInput() {
    return this._coreDataVolumeSize;
  }

  // core_data_volume_type - computed: true, optional: true, required: false
  private _coreDataVolumeType?: string; 
  public get coreDataVolumeType() {
    return this.getStringAttribute('core_data_volume_type');
  }
  public set coreDataVolumeType(value: string) {
    this._coreDataVolumeType = value;
  }
  public resetCoreDataVolumeType() {
    this._coreDataVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDataVolumeTypeInput() {
    return this._coreDataVolumeType;
  }

  // core_node_num - computed: false, optional: false, required: true
  private _coreNodeNum?: number; 
  public get coreNodeNum() {
    return this.getNumberAttribute('core_node_num');
  }
  public set coreNodeNum(value: number) {
    this._coreNodeNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNodeNumInput() {
    return this._coreNodeNum;
  }

  // core_node_product_id - computed: true, optional: false, required: false
  public get coreNodeProductId() {
    return this.getStringAttribute('core_node_product_id');
  }

  // core_node_size - computed: false, optional: false, required: true
  private _coreNodeSize?: string; 
  public get coreNodeSize() {
    return this.getStringAttribute('core_node_size');
  }
  public set coreNodeSize(value: string) {
    this._coreNodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNodeSizeInput() {
    return this._coreNodeSize;
  }

  // core_node_spec_id - computed: true, optional: false, required: false
  public get coreNodeSpecId() {
    return this.getStringAttribute('core_node_spec_id');
  }

  // create_at - computed: true, optional: false, required: false
  public get createAt() {
    return this.getStringAttribute('create_at');
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // error_info - computed: true, optional: false, required: false
  public get errorInfo() {
    return this.getStringAttribute('error_info');
  }

  // external_alternate_ip - computed: true, optional: false, required: false
  public get externalAlternateIp() {
    return this.getStringAttribute('external_alternate_ip');
  }

  // external_ip - computed: true, optional: false, required: false
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }

  // fee - computed: true, optional: false, required: false
  public get fee() {
    return this.getStringAttribute('fee');
  }

  // hadoop_version - computed: true, optional: false, required: false
  public get hadoopVersion() {
    return this.getStringAttribute('hadoop_version');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // log_collection - computed: true, optional: true, required: false
  private _logCollection?: number; 
  public get logCollection() {
    return this.getNumberAttribute('log_collection');
  }
  public set logCollection(value: number) {
    this._logCollection = value;
  }
  public resetLogCollection() {
    this._logCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectionInput() {
    return this._logCollection;
  }

  // master_data_volume_count - computed: true, optional: true, required: false
  private _masterDataVolumeCount?: number; 
  public get masterDataVolumeCount() {
    return this.getNumberAttribute('master_data_volume_count');
  }
  public set masterDataVolumeCount(value: number) {
    this._masterDataVolumeCount = value;
  }
  public resetMasterDataVolumeCount() {
    this._masterDataVolumeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDataVolumeCountInput() {
    return this._masterDataVolumeCount;
  }

  // master_data_volume_size - computed: true, optional: true, required: false
  private _masterDataVolumeSize?: number; 
  public get masterDataVolumeSize() {
    return this.getNumberAttribute('master_data_volume_size');
  }
  public set masterDataVolumeSize(value: number) {
    this._masterDataVolumeSize = value;
  }
  public resetMasterDataVolumeSize() {
    this._masterDataVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDataVolumeSizeInput() {
    return this._masterDataVolumeSize;
  }

  // master_data_volume_type - computed: true, optional: true, required: false
  private _masterDataVolumeType?: string; 
  public get masterDataVolumeType() {
    return this.getStringAttribute('master_data_volume_type');
  }
  public set masterDataVolumeType(value: string) {
    this._masterDataVolumeType = value;
  }
  public resetMasterDataVolumeType() {
    this._masterDataVolumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDataVolumeTypeInput() {
    return this._masterDataVolumeType;
  }

  // master_node_ip - computed: true, optional: false, required: false
  public get masterNodeIp() {
    return this.getStringAttribute('master_node_ip');
  }

  // master_node_num - computed: false, optional: false, required: true
  private _masterNodeNum?: number; 
  public get masterNodeNum() {
    return this.getNumberAttribute('master_node_num');
  }
  public set masterNodeNum(value: number) {
    this._masterNodeNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeNumInput() {
    return this._masterNodeNum;
  }

  // master_node_product_id - computed: true, optional: false, required: false
  public get masterNodeProductId() {
    return this.getStringAttribute('master_node_product_id');
  }

  // master_node_size - computed: false, optional: false, required: true
  private _masterNodeSize?: string; 
  public get masterNodeSize() {
    return this.getStringAttribute('master_node_size');
  }
  public set masterNodeSize(value: string) {
    this._masterNodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeSizeInput() {
    return this._masterNodeSize;
  }

  // master_node_spec_id - computed: true, optional: false, required: false
  public get masterNodeSpecId() {
    return this.getStringAttribute('master_node_spec_id');
  }

  // node_public_cert_name - computed: false, optional: false, required: true
  private _nodePublicCertName?: string; 
  public get nodePublicCertName() {
    return this.getStringAttribute('node_public_cert_name');
  }
  public set nodePublicCertName(value: string) {
    this._nodePublicCertName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublicCertNameInput() {
    return this._nodePublicCertName;
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getStringAttribute('order_id');
  }

  // private_ip_first - computed: true, optional: false, required: false
  public get privateIpFirst() {
    return this.getStringAttribute('private_ip_first');
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

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // safe_mode - computed: false, optional: false, required: true
  private _safeMode?: number; 
  public get safeMode() {
    return this.getNumberAttribute('safe_mode');
  }
  public set safeMode(value: number) {
    this._safeMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get safeModeInput() {
    return this._safeMode;
  }

  // security_groups_id - computed: true, optional: false, required: false
  public get securityGroupsId() {
    return this.getStringAttribute('security_groups_id');
  }

  // slave_security_groups_id - computed: true, optional: false, required: false
  public get slaveSecurityGroupsId() {
    return this.getStringAttribute('slave_security_groups_id');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // update_at - computed: true, optional: false, required: false
  public get updateAt() {
    return this.getStringAttribute('update_at');
  }

  // vnc - computed: true, optional: false, required: false
  public get vnc() {
    return this.getStringAttribute('vnc');
  }

  // volume_size - computed: true, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // add_jobs - computed: false, optional: true, required: false
  private _addJobs?: MrsClusterV1AddJobs[] | cdktf.IResolvable; 
  public get addJobs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('add_jobs');
  }
  public set addJobs(value: MrsClusterV1AddJobs[] | cdktf.IResolvable) {
    this._addJobs = value;
  }
  public resetAddJobs() {
    this._addJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addJobsInput() {
    return this._addJobs;
  }

  // bootstrap_scripts - computed: false, optional: true, required: false
  private _bootstrapScripts?: MrsClusterV1BootstrapScripts[] | cdktf.IResolvable; 
  public get bootstrapScripts() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('bootstrap_scripts');
  }
  public set bootstrapScripts(value: MrsClusterV1BootstrapScripts[] | cdktf.IResolvable) {
    this._bootstrapScripts = value;
  }
  public resetBootstrapScripts() {
    this._bootstrapScripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapScriptsInput() {
    return this._bootstrapScripts;
  }

  // component_list - computed: false, optional: false, required: true
  private _componentList?: MrsClusterV1ComponentList[] | cdktf.IResolvable; 
  public get componentList() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('component_list');
  }
  public set componentList(value: MrsClusterV1ComponentList[] | cdktf.IResolvable) {
    this._componentList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentListInput() {
    return this._componentList;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MrsClusterV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MrsClusterV1Timeouts) {
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
      available_zone_id: cdktf.stringToTerraform(this._availableZoneId),
      billing_type: cdktf.numberToTerraform(this._billingType),
      cluster_admin_secret: cdktf.stringToTerraform(this._clusterAdminSecret),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_type: cdktf.numberToTerraform(this._clusterType),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      core_data_volume_count: cdktf.numberToTerraform(this._coreDataVolumeCount),
      core_data_volume_size: cdktf.numberToTerraform(this._coreDataVolumeSize),
      core_data_volume_type: cdktf.stringToTerraform(this._coreDataVolumeType),
      core_node_num: cdktf.numberToTerraform(this._coreNodeNum),
      core_node_size: cdktf.stringToTerraform(this._coreNodeSize),
      log_collection: cdktf.numberToTerraform(this._logCollection),
      master_data_volume_count: cdktf.numberToTerraform(this._masterDataVolumeCount),
      master_data_volume_size: cdktf.numberToTerraform(this._masterDataVolumeSize),
      master_data_volume_type: cdktf.stringToTerraform(this._masterDataVolumeType),
      master_node_num: cdktf.numberToTerraform(this._masterNodeNum),
      master_node_size: cdktf.stringToTerraform(this._masterNodeSize),
      node_public_cert_name: cdktf.stringToTerraform(this._nodePublicCertName),
      region: cdktf.stringToTerraform(this._region),
      safe_mode: cdktf.numberToTerraform(this._safeMode),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      volume_size: cdktf.numberToTerraform(this._volumeSize),
      volume_type: cdktf.stringToTerraform(this._volumeType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      add_jobs: cdktf.listMapper(mrsClusterV1AddJobsToTerraform)(this._addJobs),
      bootstrap_scripts: cdktf.listMapper(mrsClusterV1BootstrapScriptsToTerraform)(this._bootstrapScripts),
      component_list: cdktf.listMapper(mrsClusterV1ComponentListToTerraform)(this._componentList),
      timeouts: mrsClusterV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
