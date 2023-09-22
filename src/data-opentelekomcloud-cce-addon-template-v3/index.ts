// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cce_addon_template_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCceAddonTemplateV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cce_addon_template_v3#addon_name DataOpentelekomcloudCceAddonTemplateV3#addon_name}
  */
  readonly addonName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cce_addon_template_v3#addon_version DataOpentelekomcloudCceAddonTemplateV3#addon_version}
  */
  readonly addonVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cce_addon_template_v3#cluster_ip DataOpentelekomcloudCceAddonTemplateV3#cluster_ip}
  */
  readonly clusterIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cce_addon_template_v3#cluster_versions DataOpentelekomcloudCceAddonTemplateV3#cluster_versions}
  */
  readonly clusterVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cce_addon_template_v3#id DataOpentelekomcloudCceAddonTemplateV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cce_addon_template_v3#image_version DataOpentelekomcloudCceAddonTemplateV3#image_version}
  */
  readonly imageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cce_addon_template_v3#swr_addr DataOpentelekomcloudCceAddonTemplateV3#swr_addr}
  */
  readonly swrAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cce_addon_template_v3#swr_user DataOpentelekomcloudCceAddonTemplateV3#swr_user}
  */
  readonly swrUser?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cce_addon_template_v3 opentelekomcloud_cce_addon_template_v3}
*/
export class DataOpentelekomcloudCceAddonTemplateV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cce_addon_template_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.8/docs/data-sources/cce_addon_template_v3 opentelekomcloud_cce_addon_template_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudCceAddonTemplateV3Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudCceAddonTemplateV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cce_addon_template_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.35.8',
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
    this._addonName = config.addonName;
    this._addonVersion = config.addonVersion;
    this._clusterIp = config.clusterIp;
    this._clusterVersions = config.clusterVersions;
    this._id = config.id;
    this._imageVersion = config.imageVersion;
    this._swrAddr = config.swrAddr;
    this._swrUser = config.swrUser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addon_name - computed: false, optional: false, required: true
  private _addonName?: string; 
  public get addonName() {
    return this.getStringAttribute('addon_name');
  }
  public set addonName(value: string) {
    this._addonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addonNameInput() {
    return this._addonName;
  }

  // addon_version - computed: false, optional: false, required: true
  private _addonVersion?: string; 
  public get addonVersion() {
    return this.getStringAttribute('addon_version');
  }
  public set addonVersion(value: string) {
    this._addonVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addonVersionInput() {
    return this._addonVersion;
  }

  // cluster_ip - computed: true, optional: true, required: false
  private _clusterIp?: string; 
  public get clusterIp() {
    return this.getStringAttribute('cluster_ip');
  }
  public set clusterIp(value: string) {
    this._clusterIp = value;
  }
  public resetClusterIp() {
    this._clusterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpInput() {
    return this._clusterIp;
  }

  // cluster_versions - computed: true, optional: true, required: false
  private _clusterVersions?: string; 
  public get clusterVersions() {
    return this.getStringAttribute('cluster_versions');
  }
  public set clusterVersions(value: string) {
    this._clusterVersions = value;
  }
  public resetClusterVersions() {
    this._clusterVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionsInput() {
    return this._clusterVersions;
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

  // image_version - computed: true, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // swr_addr - computed: true, optional: true, required: false
  private _swrAddr?: string; 
  public get swrAddr() {
    return this.getStringAttribute('swr_addr');
  }
  public set swrAddr(value: string) {
    this._swrAddr = value;
  }
  public resetSwrAddr() {
    this._swrAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swrAddrInput() {
    return this._swrAddr;
  }

  // swr_user - computed: true, optional: true, required: false
  private _swrUser?: string; 
  public get swrUser() {
    return this.getStringAttribute('swr_user');
  }
  public set swrUser(value: string) {
    this._swrUser = value;
  }
  public resetSwrUser() {
    this._swrUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swrUserInput() {
    return this._swrUser;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addon_name: cdktf.stringToTerraform(this._addonName),
      addon_version: cdktf.stringToTerraform(this._addonVersion),
      cluster_ip: cdktf.stringToTerraform(this._clusterIp),
      cluster_versions: cdktf.stringToTerraform(this._clusterVersions),
      id: cdktf.stringToTerraform(this._id),
      image_version: cdktf.stringToTerraform(this._imageVersion),
      swr_addr: cdktf.stringToTerraform(this._swrAddr),
      swr_user: cdktf.stringToTerraform(this._swrUser),
    };
  }
}
