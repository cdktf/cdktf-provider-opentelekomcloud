// https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudRtsStackResourceV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1.html#physical_resource_id DataOpentelekomcloudRtsStackResourceV1#physical_resource_id}
  */
  readonly physicalResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1.html#region DataOpentelekomcloudRtsStackResourceV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1.html#resource_name DataOpentelekomcloudRtsStackResourceV1#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1.html#resource_type DataOpentelekomcloudRtsStackResourceV1#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1.html#stack_name DataOpentelekomcloudRtsStackResourceV1#stack_name}
  */
  readonly stackName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1.html opentelekomcloud_rts_stack_resource_v1}
*/
export class DataOpentelekomcloudRtsStackResourceV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_rts_stack_resource_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/rts_stack_resource_v1.html opentelekomcloud_rts_stack_resource_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudRtsStackResourceV1Config
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudRtsStackResourceV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_rts_stack_resource_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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
  public get id() {
    return this.getStringAttribute('id');
  }

  // logical_resource_id - computed: true, optional: false, required: false
  public get logicalResourceId() {
    return this.getStringAttribute('logical_resource_id');
  }

  // physical_resource_id - computed: false, optional: true, required: false
  private _physicalResourceId?: string | undefined; 
  public get physicalResourceId() {
    return this.getStringAttribute('physical_resource_id');
  }
  public set physicalResourceId(value: string | undefined) {
    this._physicalResourceId = value;
  }
  public resetPhysicalResourceId() {
    this._physicalResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalResourceIdInput() {
    return this._physicalResourceId
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

  // required_by - computed: true, optional: false, required: false
  public get requiredBy() {
    return this.getListAttribute('required_by');
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string | undefined; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string | undefined) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName
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
  private _resourceType?: string | undefined; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string | undefined) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType
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
    return this._stackName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      physical_resource_id: cdktf.stringToTerraform(this._physicalResourceId),
      region: cdktf.stringToTerraform(this._region),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      stack_name: cdktf.stringToTerraform(this._stackName),
    };
  }
}
