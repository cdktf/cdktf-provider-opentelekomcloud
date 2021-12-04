// https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnaasIpsecPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#auth_algorithm VpnaasIpsecPolicyV2#auth_algorithm}
  */
  readonly authAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#description VpnaasIpsecPolicyV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#encapsulation_mode VpnaasIpsecPolicyV2#encapsulation_mode}
  */
  readonly encapsulationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#encryption_algorithm VpnaasIpsecPolicyV2#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#name VpnaasIpsecPolicyV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#pfs VpnaasIpsecPolicyV2#pfs}
  */
  readonly pfs?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#region VpnaasIpsecPolicyV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#tenant_id VpnaasIpsecPolicyV2#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#transform_protocol VpnaasIpsecPolicyV2#transform_protocol}
  */
  readonly transformProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#value_specs VpnaasIpsecPolicyV2#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * lifetime block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#lifetime VpnaasIpsecPolicyV2#lifetime}
  */
  readonly lifetime?: VpnaasIpsecPolicyV2Lifetime[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#timeouts VpnaasIpsecPolicyV2#timeouts}
  */
  readonly timeouts?: VpnaasIpsecPolicyV2Timeouts;
}
export interface VpnaasIpsecPolicyV2Lifetime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#units VpnaasIpsecPolicyV2#units}
  */
  readonly units?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#value VpnaasIpsecPolicyV2#value}
  */
  readonly value?: number;
}

export function vpnaasIpsecPolicyV2LifetimeToTerraform(struct?: VpnaasIpsecPolicyV2Lifetime): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    units: cdktf.stringToTerraform(struct!.units),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface VpnaasIpsecPolicyV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html#create VpnaasIpsecPolicyV2#create}
  */
  readonly create?: string;
}

export function vpnaasIpsecPolicyV2TimeoutsToTerraform(struct?: VpnaasIpsecPolicyV2TimeoutsOutputReference | VpnaasIpsecPolicyV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class VpnaasIpsecPolicyV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): VpnaasIpsecPolicyV2Timeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnaasIpsecPolicyV2Timeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html opentelekomcloud_vpnaas_ipsec_policy_v2}
*/
export class VpnaasIpsecPolicyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpnaas_ipsec_policy_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpnaas_ipsec_policy_v2.html opentelekomcloud_vpnaas_ipsec_policy_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnaasIpsecPolicyV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: VpnaasIpsecPolicyV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpnaas_ipsec_policy_v2',
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
    this._encapsulationMode = config.encapsulationMode;
    this._encryptionAlgorithm = config.encryptionAlgorithm;
    this._name = config.name;
    this._pfs = config.pfs;
    this._region = config.region;
    this._tenantId = config.tenantId;
    this._transformProtocol = config.transformProtocol;
    this._valueSpecs = config.valueSpecs;
    this._lifetime = config.lifetime;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_algorithm - computed: true, optional: true, required: false
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

  // encapsulation_mode - computed: true, optional: true, required: false
  private _encapsulationMode?: string; 
  public get encapsulationMode() {
    return this.getStringAttribute('encapsulation_mode');
  }
  public set encapsulationMode(value: string) {
    this._encapsulationMode = value;
  }
  public resetEncapsulationMode() {
    this._encapsulationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationModeInput() {
    return this._encapsulationMode;
  }

  // encryption_algorithm - computed: true, optional: true, required: false
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

  // pfs - computed: true, optional: true, required: false
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

  // transform_protocol - computed: true, optional: true, required: false
  private _transformProtocol?: string; 
  public get transformProtocol() {
    return this.getStringAttribute('transform_protocol');
  }
  public set transformProtocol(value: string) {
    this._transformProtocol = value;
  }
  public resetTransformProtocol() {
    this._transformProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformProtocolInput() {
    return this._transformProtocol;
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
  private _lifetime?: VpnaasIpsecPolicyV2Lifetime[]; 
  public get lifetime() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lifetime') as any;
  }
  public set lifetime(value: VpnaasIpsecPolicyV2Lifetime[]) {
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
  private _timeouts = new VpnaasIpsecPolicyV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpnaasIpsecPolicyV2Timeouts) {
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
      encapsulation_mode: cdktf.stringToTerraform(this._encapsulationMode),
      encryption_algorithm: cdktf.stringToTerraform(this._encryptionAlgorithm),
      name: cdktf.stringToTerraform(this._name),
      pfs: cdktf.stringToTerraform(this._pfs),
      region: cdktf.stringToTerraform(this._region),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      transform_protocol: cdktf.stringToTerraform(this._transformProtocol),
      value_specs: cdktf.hashMapper(cdktf.anyToTerraform)(this._valueSpecs),
      lifetime: cdktf.listMapper(vpnaasIpsecPolicyV2LifetimeToTerraform)(this._lifetime),
      timeouts: vpnaasIpsecPolicyV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
