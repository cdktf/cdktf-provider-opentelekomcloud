// https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CceClusterV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#annotations CceClusterV3#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#authenticating_proxy_ca CceClusterV3#authenticating_proxy_ca}
  */
  readonly authenticatingProxyCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#authentication_mode CceClusterV3#authentication_mode}
  */
  readonly authenticationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#billing_mode CceClusterV3#billing_mode}
  */
  readonly billingMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#cluster_type CceClusterV3#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#cluster_version CceClusterV3#cluster_version}
  */
  readonly clusterVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#container_network_cidr CceClusterV3#container_network_cidr}
  */
  readonly containerNetworkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#container_network_type CceClusterV3#container_network_type}
  */
  readonly containerNetworkType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#description CceClusterV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#eip CceClusterV3#eip}
  */
  readonly eip?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#extend_param CceClusterV3#extend_param}
  */
  readonly extendParam?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#flavor_id CceClusterV3#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#highway_subnet_id CceClusterV3#highway_subnet_id}
  */
  readonly highwaySubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#ignore_addons CceClusterV3#ignore_addons}
  */
  readonly ignoreAddons?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#kubernetes_svc_ip_range CceClusterV3#kubernetes_svc_ip_range}
  */
  readonly kubernetesSvcIpRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#labels CceClusterV3#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#multi_az CceClusterV3#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#name CceClusterV3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#no_addons CceClusterV3#no_addons}
  */
  readonly noAddons?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#region CceClusterV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#subnet_id CceClusterV3#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#vpc_id CceClusterV3#vpc_id}
  */
  readonly vpcId: string;
  /**
  * authenticating_proxy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#authenticating_proxy CceClusterV3#authenticating_proxy}
  */
  readonly authenticatingProxy?: CceClusterV3AuthenticatingProxy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#timeouts CceClusterV3#timeouts}
  */
  readonly timeouts?: CceClusterV3Timeouts;
}
export class CceClusterV3CertificateClusters extends cdktf.ComplexComputedList {

  // certificate_authority_data - computed: true, optional: false, required: false
  public get certificateAuthorityData() {
    return this.getStringAttribute('certificate_authority_data');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}
export class CceClusterV3CertificateUsers extends cdktf.ComplexComputedList {

  // client_certificate_data - computed: true, optional: false, required: false
  public get clientCertificateData() {
    return this.getStringAttribute('client_certificate_data');
  }

  // client_key_data - computed: true, optional: false, required: false
  public get clientKeyData() {
    return this.getStringAttribute('client_key_data');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface CceClusterV3AuthenticatingProxy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#ca CceClusterV3#ca}
  */
  readonly ca: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#cert CceClusterV3#cert}
  */
  readonly cert: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#private_key CceClusterV3#private_key}
  */
  readonly privateKey: string;
}

export function cceClusterV3AuthenticatingProxyToTerraform(struct?: CceClusterV3AuthenticatingProxyOutputReference | CceClusterV3AuthenticatingProxy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: cdktf.stringToTerraform(struct!.ca),
    cert: cdktf.stringToTerraform(struct!.cert),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}

export class CceClusterV3AuthenticatingProxyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CceClusterV3AuthenticatingProxy | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._ca) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca;
    }
    if (this._cert) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._privateKey) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceClusterV3AuthenticatingProxy | undefined) {
    if (value === undefined) {
      this._ca = undefined;
      this._cert = undefined;
      this._privateKey = undefined;
    }
    else {
      this._ca = value.ca;
      this._cert = value.cert;
      this._privateKey = value.privateKey;
    }
  }

  // ca - computed: false, optional: false, required: true
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}
export interface CceClusterV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#create CceClusterV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html#delete CceClusterV3#delete}
  */
  readonly delete?: string;
}

export function cceClusterV3TimeoutsToTerraform(struct?: CceClusterV3TimeoutsOutputReference | CceClusterV3Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class CceClusterV3TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CceClusterV3Timeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CceClusterV3Timeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html opentelekomcloud_cce_cluster_v3}
*/
export class CceClusterV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_cce_cluster_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/cce_cluster_v3.html opentelekomcloud_cce_cluster_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CceClusterV3Config
  */
  public constructor(scope: Construct, id: string, config: CceClusterV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cce_cluster_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._annotations = config.annotations;
    this._authenticatingProxyCa = config.authenticatingProxyCa;
    this._authenticationMode = config.authenticationMode;
    this._billingMode = config.billingMode;
    this._clusterType = config.clusterType;
    this._clusterVersion = config.clusterVersion;
    this._containerNetworkCidr = config.containerNetworkCidr;
    this._containerNetworkType = config.containerNetworkType;
    this._description = config.description;
    this._eip = config.eip;
    this._extendParam = config.extendParam;
    this._flavorId = config.flavorId;
    this._highwaySubnetId = config.highwaySubnetId;
    this._ignoreAddons = config.ignoreAddons;
    this._kubernetesSvcIpRange = config.kubernetesSvcIpRange;
    this._labels = config.labels;
    this._multiAz = config.multiAz;
    this._name = config.name;
    this._noAddons = config.noAddons;
    this._region = config.region;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
    this._authenticatingProxy.internalValue = config.authenticatingProxy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // authenticating_proxy_ca - computed: false, optional: true, required: false
  private _authenticatingProxyCa?: string; 
  public get authenticatingProxyCa() {
    return this.getStringAttribute('authenticating_proxy_ca');
  }
  public set authenticatingProxyCa(value: string) {
    this._authenticatingProxyCa = value;
  }
  public resetAuthenticatingProxyCa() {
    this._authenticatingProxyCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatingProxyCaInput() {
    return this._authenticatingProxyCa;
  }

  // authentication_mode - computed: false, optional: true, required: false
  private _authenticationMode?: string; 
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }
  public set authenticationMode(value: string) {
    this._authenticationMode = value;
  }
  public resetAuthenticationMode() {
    this._authenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode;
  }

  // billing_mode - computed: true, optional: true, required: false
  private _billingMode?: number; 
  public get billingMode() {
    return this.getNumberAttribute('billing_mode');
  }
  public set billingMode(value: number) {
    this._billingMode = value;
  }
  public resetBillingMode() {
    this._billingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingModeInput() {
    return this._billingMode;
  }

  // certificate_clusters - computed: true, optional: false, required: false
  public certificateClusters(index: string) {
    return new CceClusterV3CertificateClusters(this, 'certificate_clusters', index);
  }

  // certificate_users - computed: true, optional: false, required: false
  public certificateUsers(index: string) {
    return new CceClusterV3CertificateUsers(this, 'certificate_users', index);
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // cluster_version - computed: true, optional: true, required: false
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  public resetClusterVersion() {
    this._clusterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // container_network_cidr - computed: true, optional: true, required: false
  private _containerNetworkCidr?: string; 
  public get containerNetworkCidr() {
    return this.getStringAttribute('container_network_cidr');
  }
  public set containerNetworkCidr(value: string) {
    this._containerNetworkCidr = value;
  }
  public resetContainerNetworkCidr() {
    this._containerNetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNetworkCidrInput() {
    return this._containerNetworkCidr;
  }

  // container_network_type - computed: false, optional: false, required: true
  private _containerNetworkType?: string; 
  public get containerNetworkType() {
    return this.getStringAttribute('container_network_type');
  }
  public set containerNetworkType(value: string) {
    this._containerNetworkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNetworkTypeInput() {
    return this._containerNetworkType;
  }

  // description - computed: true, optional: true, required: false
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

  // eip - computed: false, optional: true, required: false
  private _eip?: string; 
  public get eip() {
    return this.getStringAttribute('eip');
  }
  public set eip(value: string) {
    this._eip = value;
  }
  public resetEip() {
    this._eip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInput() {
    return this._eip;
  }

  // extend_param - computed: false, optional: true, required: false
  private _extendParam?: { [key: string]: string } | cdktf.IResolvable; 
  public get extendParam() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('extend_param') as any;
  }
  public set extendParam(value: { [key: string]: string } | cdktf.IResolvable) {
    this._extendParam = value;
  }
  public resetExtendParam() {
    this._extendParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendParamInput() {
    return this._extendParam;
  }

  // external - computed: true, optional: false, required: false
  public get external() {
    return this.getStringAttribute('external');
  }

  // external_otc - computed: true, optional: false, required: false
  public get externalOtc() {
    return this.getStringAttribute('external_otc');
  }

  // flavor_id - computed: false, optional: false, required: true
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }

  // highway_subnet_id - computed: true, optional: true, required: false
  private _highwaySubnetId?: string; 
  public get highwaySubnetId() {
    return this.getStringAttribute('highway_subnet_id');
  }
  public set highwaySubnetId(value: string) {
    this._highwaySubnetId = value;
  }
  public resetHighwaySubnetId() {
    this._highwaySubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highwaySubnetIdInput() {
    return this._highwaySubnetId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_addons - computed: false, optional: true, required: false
  private _ignoreAddons?: boolean | cdktf.IResolvable; 
  public get ignoreAddons() {
    return this.getBooleanAttribute('ignore_addons') as any;
  }
  public set ignoreAddons(value: boolean | cdktf.IResolvable) {
    this._ignoreAddons = value;
  }
  public resetIgnoreAddons() {
    this._ignoreAddons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAddonsInput() {
    return this._ignoreAddons;
  }

  // installed_addons - computed: true, optional: false, required: false
  public get installedAddons() {
    return this.getListAttribute('installed_addons');
  }

  // internal - computed: true, optional: false, required: false
  public get internal() {
    return this.getStringAttribute('internal');
  }

  // kube_proxy_mode - computed: true, optional: false, required: false
  public get kubeProxyMode() {
    return this.getStringAttribute('kube_proxy_mode');
  }

  // kubernetes_svc_ip_range - computed: true, optional: true, required: false
  private _kubernetesSvcIpRange?: string; 
  public get kubernetesSvcIpRange() {
    return this.getStringAttribute('kubernetes_svc_ip_range');
  }
  public set kubernetesSvcIpRange(value: string) {
    this._kubernetesSvcIpRange = value;
  }
  public resetKubernetesSvcIpRange() {
    this._kubernetesSvcIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesSvcIpRangeInput() {
    return this._kubernetesSvcIpRange;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // multi_az - computed: false, optional: true, required: false
  private _multiAz?: boolean | cdktf.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az') as any;
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
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
    return this._name;
  }

  // no_addons - computed: false, optional: true, required: false
  private _noAddons?: boolean | cdktf.IResolvable; 
  public get noAddons() {
    return this.getBooleanAttribute('no_addons') as any;
  }
  public set noAddons(value: boolean | cdktf.IResolvable) {
    this._noAddons = value;
  }
  public resetNoAddons() {
    this._noAddons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAddonsInput() {
    return this._noAddons;
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

  // security_group_control - computed: true, optional: false, required: false
  public get securityGroupControl() {
    return this.getStringAttribute('security_group_control');
  }

  // security_group_node - computed: true, optional: false, required: false
  public get securityGroupNode() {
    return this.getStringAttribute('security_group_node');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // authenticating_proxy - computed: false, optional: true, required: false
  private _authenticatingProxy = new CceClusterV3AuthenticatingProxyOutputReference(this as any, "authenticating_proxy", true);
  public get authenticatingProxy() {
    return this._authenticatingProxy;
  }
  public putAuthenticatingProxy(value: CceClusterV3AuthenticatingProxy) {
    this._authenticatingProxy.internalValue = value;
  }
  public resetAuthenticatingProxy() {
    this._authenticatingProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatingProxyInput() {
    return this._authenticatingProxy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CceClusterV3TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CceClusterV3Timeouts) {
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
      annotations: cdktf.hashMapper(cdktf.anyToTerraform)(this._annotations),
      authenticating_proxy_ca: cdktf.stringToTerraform(this._authenticatingProxyCa),
      authentication_mode: cdktf.stringToTerraform(this._authenticationMode),
      billing_mode: cdktf.numberToTerraform(this._billingMode),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      container_network_cidr: cdktf.stringToTerraform(this._containerNetworkCidr),
      container_network_type: cdktf.stringToTerraform(this._containerNetworkType),
      description: cdktf.stringToTerraform(this._description),
      eip: cdktf.stringToTerraform(this._eip),
      extend_param: cdktf.hashMapper(cdktf.anyToTerraform)(this._extendParam),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      highway_subnet_id: cdktf.stringToTerraform(this._highwaySubnetId),
      ignore_addons: cdktf.booleanToTerraform(this._ignoreAddons),
      kubernetes_svc_ip_range: cdktf.stringToTerraform(this._kubernetesSvcIpRange),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      name: cdktf.stringToTerraform(this._name),
      no_addons: cdktf.booleanToTerraform(this._noAddons),
      region: cdktf.stringToTerraform(this._region),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      authenticating_proxy: cceClusterV3AuthenticatingProxyToTerraform(this._authenticatingProxy.internalValue),
      timeouts: cceClusterV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
