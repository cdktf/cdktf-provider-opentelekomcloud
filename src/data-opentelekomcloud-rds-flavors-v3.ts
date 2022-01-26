// https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudRdsFlavorsV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3#db_type DataOpentelekomcloudRdsFlavorsV3#db_type}
  */
  readonly dbType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3#db_version DataOpentelekomcloudRdsFlavorsV3#db_version}
  */
  readonly dbVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3#instance_mode DataOpentelekomcloudRdsFlavorsV3#instance_mode}
  */
  readonly instanceMode: string;
}
export class DataOpentelekomcloudRdsFlavorsV3Flavors extends cdktf.ComplexComputedList {

  // az_status - computed: true, optional: false, required: false
  public get azStatus() {
    return this.getStringMapAttribute('az_status');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getStringAttribute('vcpus');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3 opentelekomcloud_rds_flavors_v3}
*/
export class DataOpentelekomcloudRdsFlavorsV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_rds_flavors_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rds_flavors_v3 opentelekomcloud_rds_flavors_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudRdsFlavorsV3Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudRdsFlavorsV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_rds_flavors_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbType = config.dbType;
    this._dbVersion = config.dbVersion;
    this._instanceMode = config.instanceMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_type - computed: false, optional: false, required: true
  private _dbType?: string; 
  public get dbType() {
    return this.getStringAttribute('db_type');
  }
  public set dbType(value: string) {
    this._dbType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbTypeInput() {
    return this._dbType;
  }

  // db_version - computed: false, optional: false, required: true
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // flavors - computed: true, optional: false, required: false
  public flavors(index: string) {
    return new DataOpentelekomcloudRdsFlavorsV3Flavors(this, 'flavors', index, false);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_mode - computed: false, optional: false, required: true
  private _instanceMode?: string; 
  public get instanceMode() {
    return this.getStringAttribute('instance_mode');
  }
  public set instanceMode(value: string) {
    this._instanceMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceModeInput() {
    return this._instanceMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_type: cdktf.stringToTerraform(this._dbType),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      instance_mode: cdktf.stringToTerraform(this._instanceMode),
    };
  }
}
