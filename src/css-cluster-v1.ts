// https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssClusterV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#admin_pass CssClusterV1#admin_pass}
  */
  readonly adminPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#enable_authority CssClusterV1#enable_authority}
  */
  readonly enableAuthority?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#enable_https CssClusterV1#enable_https}
  */
  readonly enableHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#expect_node_num CssClusterV1#expect_node_num}
  */
  readonly expectNodeNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#name CssClusterV1#name}
  */
  readonly name: string;
  /**
  * datastore block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#datastore CssClusterV1#datastore}
  */
  readonly datastore?: CssClusterV1Datastore;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#node_config CssClusterV1#node_config}
  */
  readonly nodeConfig: CssClusterV1NodeConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#timeouts CssClusterV1#timeouts}
  */
  readonly timeouts?: CssClusterV1Timeouts;
}
export class CssClusterV1Nodes extends cdktf.ComplexComputedList {

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface CssClusterV1Datastore {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#type CssClusterV1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#version CssClusterV1#version}
  */
  readonly version?: string;
}

function cssClusterV1DatastoreToTerraform(struct?: CssClusterV1DatastoreOutputReference | CssClusterV1Datastore): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class CssClusterV1DatastoreOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: true, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // version - computed: true, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }
}
export interface CssClusterV1NodeConfigNetworkInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#network_id CssClusterV1#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#security_group_id CssClusterV1#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#vpc_id CssClusterV1#vpc_id}
  */
  readonly vpcId: string;
}

function cssClusterV1NodeConfigNetworkInfoToTerraform(struct?: CssClusterV1NodeConfigNetworkInfoOutputReference | CssClusterV1NodeConfigNetworkInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}

export class CssClusterV1NodeConfigNetworkInfoOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId
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
    return this._vpcId
  }
}
export interface CssClusterV1NodeConfigVolume {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#encryption_key CssClusterV1#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#size CssClusterV1#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#volume_type CssClusterV1#volume_type}
  */
  readonly volumeType: string;
}

function cssClusterV1NodeConfigVolumeToTerraform(struct?: CssClusterV1NodeConfigVolumeOutputReference | CssClusterV1NodeConfigVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    size: cdktf.numberToTerraform(struct!.size),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export class CssClusterV1NodeConfigVolumeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // encryption_key - computed: true, optional: true, required: false
  private _encryptionKey?: string | undefined; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string | undefined) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType
  }
}
export interface CssClusterV1NodeConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#availability_zone CssClusterV1#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#flavor CssClusterV1#flavor}
  */
  readonly flavor: string;
  /**
  * network_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#network_info CssClusterV1#network_info}
  */
  readonly networkInfo: CssClusterV1NodeConfigNetworkInfo;
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#volume CssClusterV1#volume}
  */
  readonly volume: CssClusterV1NodeConfigVolume;
}

function cssClusterV1NodeConfigToTerraform(struct?: CssClusterV1NodeConfigOutputReference | CssClusterV1NodeConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    network_info: cssClusterV1NodeConfigNetworkInfoToTerraform(struct!.networkInfo),
    volume: cssClusterV1NodeConfigVolumeToTerraform(struct!.volume),
  }
}

export class CssClusterV1NodeConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string | undefined; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor
  }

  // network_info - computed: false, optional: false, required: true
  private _networkInfo?: CssClusterV1NodeConfigNetworkInfo; 
  private __networkInfoOutput = new CssClusterV1NodeConfigNetworkInfoOutputReference(this as any, "network_info", true);
  public get networkInfo() {
    return this.__networkInfoOutput;
  }
  public putNetworkInfo(value: CssClusterV1NodeConfigNetworkInfo) {
    this._networkInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInfoInput() {
    return this._networkInfo
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: CssClusterV1NodeConfigVolume; 
  private __volumeOutput = new CssClusterV1NodeConfigVolumeOutputReference(this as any, "volume", true);
  public get volume() {
    return this.__volumeOutput;
  }
  public putVolume(value: CssClusterV1NodeConfigVolume) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume
  }
}
export interface CssClusterV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#create CssClusterV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html#update CssClusterV1#update}
  */
  readonly update?: string;
}

function cssClusterV1TimeoutsToTerraform(struct?: CssClusterV1TimeoutsOutputReference | CssClusterV1Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CssClusterV1TimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html opentelekomcloud_css_cluster_v1}
*/
export class CssClusterV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_css_cluster_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/css_cluster_v1.html opentelekomcloud_css_cluster_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssClusterV1Config
  */
  public constructor(scope: Construct, id: string, config: CssClusterV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_css_cluster_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminPass = config.adminPass;
    this._enableAuthority = config.enableAuthority;
    this._enableHttps = config.enableHttps;
    this._expectNodeNum = config.expectNodeNum;
    this._name = config.name;
    this._datastore = config.datastore;
    this._nodeConfig = config.nodeConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_pass - computed: false, optional: true, required: false
  private _adminPass?: string | undefined; 
  public get adminPass() {
    return this.getStringAttribute('admin_pass');
  }
  public set adminPass(value: string | undefined) {
    this._adminPass = value;
  }
  public resetAdminPass() {
    this._adminPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPassInput() {
    return this._adminPass
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enable_authority - computed: true, optional: true, required: false
  private _enableAuthority?: boolean | cdktf.IResolvable | undefined; 
  public get enableAuthority() {
    return this.getBooleanAttribute('enable_authority') as any;
  }
  public set enableAuthority(value: boolean | cdktf.IResolvable | undefined) {
    this._enableAuthority = value;
  }
  public resetEnableAuthority() {
    this._enableAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAuthorityInput() {
    return this._enableAuthority
  }

  // enable_https - computed: true, optional: true, required: false
  private _enableHttps?: boolean | cdktf.IResolvable | undefined; 
  public get enableHttps() {
    return this.getBooleanAttribute('enable_https') as any;
  }
  public set enableHttps(value: boolean | cdktf.IResolvable | undefined) {
    this._enableHttps = value;
  }
  public resetEnableHttps() {
    this._enableHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpsInput() {
    return this._enableHttps
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // expect_node_num - computed: false, optional: true, required: false
  private _expectNodeNum?: number | undefined; 
  public get expectNodeNum() {
    return this.getNumberAttribute('expect_node_num');
  }
  public set expectNodeNum(value: number | undefined) {
    this._expectNodeNum = value;
  }
  public resetExpectNodeNum() {
    this._expectNodeNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectNodeNumInput() {
    return this._expectNodeNum
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // nodes - computed: true, optional: false, required: false
  public nodes(index: string) {
    return new CssClusterV1Nodes(this, 'nodes', index);
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore?: CssClusterV1Datastore | undefined; 
  private __datastoreOutput = new CssClusterV1DatastoreOutputReference(this as any, "datastore", true);
  public get datastore() {
    return this.__datastoreOutput;
  }
  public putDatastore(value: CssClusterV1Datastore | undefined) {
    this._datastore = value;
  }
  public resetDatastore() {
    this._datastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore
  }

  // node_config - computed: false, optional: false, required: true
  private _nodeConfig?: CssClusterV1NodeConfig; 
  private __nodeConfigOutput = new CssClusterV1NodeConfigOutputReference(this as any, "node_config", true);
  public get nodeConfig() {
    return this.__nodeConfigOutput;
  }
  public putNodeConfig(value: CssClusterV1NodeConfig) {
    this._nodeConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CssClusterV1Timeouts | undefined; 
  private __timeoutsOutput = new CssClusterV1TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CssClusterV1Timeouts | undefined) {
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
      admin_pass: cdktf.stringToTerraform(this._adminPass),
      enable_authority: cdktf.booleanToTerraform(this._enableAuthority),
      enable_https: cdktf.booleanToTerraform(this._enableHttps),
      expect_node_num: cdktf.numberToTerraform(this._expectNodeNum),
      name: cdktf.stringToTerraform(this._name),
      datastore: cssClusterV1DatastoreToTerraform(this._datastore),
      node_config: cssClusterV1NodeConfigToTerraform(this._nodeConfig),
      timeouts: cssClusterV1TimeoutsToTerraform(this._timeouts),
    };
  }
}
