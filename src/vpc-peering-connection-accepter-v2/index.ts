// https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPeeringConnectionAccepterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2#accept VpcPeeringConnectionAccepterV2#accept}
  */
  readonly accept?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2#id VpcPeeringConnectionAccepterV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2#region VpcPeeringConnectionAccepterV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2#vpc_peering_connection_id VpcPeeringConnectionAccepterV2#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2#timeouts VpcPeeringConnectionAccepterV2#timeouts}
  */
  readonly timeouts?: VpcPeeringConnectionAccepterV2Timeouts;
}
export interface VpcPeeringConnectionAccepterV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2#create VpcPeeringConnectionAccepterV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2#delete VpcPeeringConnectionAccepterV2#delete}
  */
  readonly delete?: string;
}

export function vpcPeeringConnectionAccepterV2TimeoutsToTerraform(struct?: VpcPeeringConnectionAccepterV2TimeoutsOutputReference | VpcPeeringConnectionAccepterV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class VpcPeeringConnectionAccepterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcPeeringConnectionAccepterV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: VpcPeeringConnectionAccepterV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2 opentelekomcloud_vpc_peering_connection_accepter_v2}
*/
export class VpcPeeringConnectionAccepterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_vpc_peering_connection_accepter_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2 opentelekomcloud_vpc_peering_connection_accepter_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPeeringConnectionAccepterV2Config
  */
  public constructor(scope: Construct, id: string, config: VpcPeeringConnectionAccepterV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpc_peering_connection_accepter_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.31.9',
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
    this._accept = config.accept;
    this._id = config.id;
    this._region = config.region;
    this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept - computed: false, optional: true, required: false
  private _accept?: boolean | cdktf.IResolvable; 
  public get accept() {
    return this.getBooleanAttribute('accept');
  }
  public set accept(value: boolean | cdktf.IResolvable) {
    this._accept = value;
  }
  public resetAccept() {
    this._accept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptInput() {
    return this._accept;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_tenant_id - computed: true, optional: false, required: false
  public get peerTenantId() {
    return this.getStringAttribute('peer_tenant_id');
  }

  // peer_vpc_id - computed: true, optional: false, required: false
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_peering_connection_id - computed: false, optional: false, required: true
  private _vpcPeeringConnectionId?: string; 
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
  public set vpcPeeringConnectionId(value: string) {
    this._vpcPeeringConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectionIdInput() {
    return this._vpcPeeringConnectionId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcPeeringConnectionAccepterV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcPeeringConnectionAccepterV2Timeouts) {
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
      accept: cdktf.booleanToTerraform(this._accept),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
      timeouts: vpcPeeringConnectionAccepterV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
