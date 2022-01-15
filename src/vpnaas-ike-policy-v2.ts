// https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnaasIkePolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#auth_algorithm VpnaasIkePolicyV2#auth_algorithm}
  */
  readonly authAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#description VpnaasIkePolicyV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#encryption_algorithm VpnaasIkePolicyV2#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#ike_version VpnaasIkePolicyV2#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#name VpnaasIkePolicyV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#pfs VpnaasIkePolicyV2#pfs}
  */
  readonly pfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#phase1_negotiation_mode VpnaasIkePolicyV2#phase1_negotiation_mode}
  */
  readonly phase1NegotiationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#region VpnaasIkePolicyV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#tenant_id VpnaasIkePolicyV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#value_specs VpnaasIkePolicyV2#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * lifetime block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#lifetime VpnaasIkePolicyV2#lifetime}
  */
  readonly lifetime?: VpnaasIkePolicyV2Lifetime[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#timeouts VpnaasIkePolicyV2#timeouts}
  */
  readonly timeouts?: VpnaasIkePolicyV2Timeouts;
}
export interface VpnaasIkePolicyV2Lifetime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#units VpnaasIkePolicyV2#units}
  */
  readonly units?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#value VpnaasIkePolicyV2#value}
  */
  readonly value?: number;
}

export function vpnaasIkePolicyV2LifetimeToTerraform(struct?: VpnaasIkePolicyV2Lifetime): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    units: cdktf.stringToTerraform(struct!.units),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface VpnaasIkePolicyV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2#create VpnaasIkePolicyV2#create}
  */
  readonly create?: string;
}

export function vpnaasIkePolicyV2TimeoutsToTerraform(struct?: VpnaasIkePolicyV2TimeoutsOutputReference | VpnaasIkePolicyV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class VpnaasIkePolicyV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpnaasIkePolicyV2Timeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnaasIkePolicyV2Timeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2 opentelekomcloud_vpnaas_ike_policy_v2}
*/
export class VpnaasIkePolicyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpnaas_ike_policy_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ike_policy_v2 opentelekomcloud_vpnaas_ike_policy_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnaasIkePolicyV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: VpnaasIkePolicyV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpnaas_ike_policy_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authAlgorithm = config.authAlgorithm;
    this._description = config.description;
    this._encryptionAlgorithm = config.encryptionAlgorithm;
    this._ikeVersion = config.ikeVersion;
    this._name = config.name;
    this._pfs = config.pfs;
    this._phase1NegotiationMode = config.phase1NegotiationMode;
    this._region = config.region;
    this._tenantId = config.tenantId;
    this._valueSpecs = config.valueSpecs;
    this._lifetime = config.lifetime;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_algorithm - computed: false, optional: true, required: false
  private _authAlgorithm?: string; 
  public get authAlgorithm() {
    return this.getStringAttribute('auth_algorithm');
  }
  public set authAlgorithm(value: string) {
    this._authAlgorithm = value;
  }
  public resetAuthAlgorithm() {
    this._authAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authAlgorithmInput() {
    return this._authAlgorithm;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pfs - computed: false, optional: true, required: false
  private _pfs?: string; 
  public get pfs() {
    return this.getStringAttribute('pfs');
  }
  public set pfs(value: string) {
    this._pfs = value;
  }
  public resetPfs() {
    this._pfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsInput() {
    return this._pfs;
  }

  // phase1_negotiation_mode - computed: false, optional: true, required: false
  private _phase1NegotiationMode?: string; 
  public get phase1NegotiationMode() {
    return this.getStringAttribute('phase1_negotiation_mode');
  }
  public set phase1NegotiationMode(value: string) {
    this._phase1NegotiationMode = value;
  }
  public resetPhase1NegotiationMode() {
    this._phase1NegotiationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1NegotiationModeInput() {
    return this._phase1NegotiationMode;
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

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // value_specs - computed: false, optional: true, required: false
  private _valueSpecs?: { [key: string]: string } | cdktf.IResolvable; 
  public get valueSpecs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('value_specs') as any;
  }
  public set valueSpecs(value: { [key: string]: string } | cdktf.IResolvable) {
    this._valueSpecs = value;
  }
  public resetValueSpecs() {
    this._valueSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSpecsInput() {
    return this._valueSpecs;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: VpnaasIkePolicyV2Lifetime[]; 
  public get lifetime() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lifetime') as any;
  }
  public set lifetime(value: VpnaasIkePolicyV2Lifetime[]) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpnaasIkePolicyV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnaasIkePolicyV2Timeouts) {
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
      auth_algorithm: cdktf.stringToTerraform(this._authAlgorithm),
      description: cdktf.stringToTerraform(this._description),
      encryption_algorithm: cdktf.stringToTerraform(this._encryptionAlgorithm),
      ike_version: cdktf.stringToTerraform(this._ikeVersion),
      name: cdktf.stringToTerraform(this._name),
      pfs: cdktf.stringToTerraform(this._pfs),
      phase1_negotiation_mode: cdktf.stringToTerraform(this._phase1NegotiationMode),
      region: cdktf.stringToTerraform(this._region),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      value_specs: cdktf.hashMapper(cdktf.anyToTerraform)(this._valueSpecs),
      lifetime: cdktf.listMapper(vpnaasIkePolicyV2LifetimeToTerraform)(this._lifetime),
      timeouts: vpnaasIkePolicyV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
