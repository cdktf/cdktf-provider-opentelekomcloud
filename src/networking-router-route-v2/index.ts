// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_router_route_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingRouterRouteV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_router_route_v2#destination_cidr NetworkingRouterRouteV2#destination_cidr}
  */
  readonly destinationCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_router_route_v2#id NetworkingRouterRouteV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_router_route_v2#next_hop NetworkingRouterRouteV2#next_hop}
  */
  readonly nextHop: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_router_route_v2#region NetworkingRouterRouteV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_router_route_v2#router_id NetworkingRouterRouteV2#router_id}
  */
  readonly routerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_router_route_v2 opentelekomcloud_networking_router_route_v2}
*/
export class NetworkingRouterRouteV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_networking_router_route_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.2/docs/resources/networking_router_route_v2 opentelekomcloud_networking_router_route_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingRouterRouteV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkingRouterRouteV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_networking_router_route_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.34.2',
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
    this._destinationCidr = config.destinationCidr;
    this._id = config.id;
    this._nextHop = config.nextHop;
    this._region = config.region;
    this._routerId = config.routerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_cidr - computed: false, optional: false, required: true
  private _destinationCidr?: string; 
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }
  public set destinationCidr(value: string) {
    this._destinationCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationCidrInput() {
    return this._destinationCidr;
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

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
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

  // router_id - computed: false, optional: false, required: true
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_cidr: cdktf.stringToTerraform(this._destinationCidr),
      id: cdktf.stringToTerraform(this._id),
      next_hop: cdktf.stringToTerraform(this._nextHop),
      region: cdktf.stringToTerraform(this._region),
      router_id: cdktf.stringToTerraform(this._routerId),
    };
  }
}
