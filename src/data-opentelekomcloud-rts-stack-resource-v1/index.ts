// https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudRtsStackResourceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#id DataOpentelekomcloudRtsStackResourceV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#physical_resource_id DataOpentelekomcloudRtsStackResourceV1#physical_resource_id}
  */
  readonly physicalResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#region DataOpentelekomcloudRtsStackResourceV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#resource_name DataOpentelekomcloudRtsStackResourceV1#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#resource_type DataOpentelekomcloudRtsStackResourceV1#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1#stack_name DataOpentelekomcloudRtsStackResourceV1#stack_name}
  */
  readonly stackName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1 opentelekomcloud_rts_stack_resource_v1}
*/
export class DataOpentelekomcloudRtsStackResourceV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_rts_stack_resource_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1 opentelekomcloud_rts_stack_resource_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudRtsStackResourceV1Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudRtsStackResourceV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_rts_stack_resource_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.31.6',
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
    this._id = config.id;
    this._physicalResourceId = config.physicalResourceId;
    this._region = config.region;
    this._resourceName = config.resourceName;
    this._resourceType = config.resourceType;
    this._stackName = config.stackName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // logical_resource_id - computed: true, optional: false, required: false
  public get logicalResourceId() {
    return this.getStringAttribute('logical_resource_id');
  }

  // physical_resource_id - computed: false, optional: true, required: false
  private _physicalResourceId?: string; 
  public get physicalResourceId() {
    return this.getStringAttribute('physical_resource_id');
  }
  public set physicalResourceId(value: string) {
    this._physicalResourceId = value;
  }
  public resetPhysicalResourceId() {
    this._physicalResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalResourceIdInput() {
    return this._physicalResourceId;
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

  // required_by - computed: true, optional: false, required: false
  public get requiredBy() {
    return cdktf.Fn.tolist(this.getListAttribute('required_by'));
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_status - computed: true, optional: false, required: false
  public get resourceStatus() {
    return this.getStringAttribute('resource_status');
  }

  // resource_status_reason - computed: true, optional: false, required: false
  public get resourceStatusReason() {
    return this.getStringAttribute('resource_status_reason');
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // stack_name - computed: false, optional: false, required: true
  private _stackName?: string; 
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }
  public set stackName(value: string) {
    this._stackName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackNameInput() {
    return this._stackName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      physical_resource_id: cdktf.stringToTerraform(this._physicalResourceId),
      region: cdktf.stringToTerraform(this._region),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      stack_name: cdktf.stringToTerraform(this._stackName),
    };
  }
}
