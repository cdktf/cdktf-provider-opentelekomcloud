# `apigwGatewayV2` Submodule <a name="`apigwGatewayV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwGatewayV2 <a name="ApigwGatewayV2" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2 opentelekomcloud_apigw_gateway_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_gateway_v2

apigwGatewayV2.ApigwGatewayV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zones: typing.List[str],
  name: str,
  security_group_id: str,
  spec_id: str,
  subnet_id: str,
  vpc_id: str,
  bandwidth_charging_mode: str = None,
  bandwidth_size: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  ingress_bandwidth_charging_mode: str = None,
  ingress_bandwidth_size: typing.Union[int, float] = None,
  loadbalancer_provider: str = None,
  maintain_begin: str = None,
  timeouts: ApigwGatewayV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#availability_zones ApigwGatewayV2#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#name ApigwGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#security_group_id ApigwGatewayV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.specId">spec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#spec_id ApigwGatewayV2#spec_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#subnet_id ApigwGatewayV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#vpc_id ApigwGatewayV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.bandwidthChargingMode">bandwidth_charging_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#bandwidth_charging_mode ApigwGatewayV2#bandwidth_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.bandwidthSize">bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#bandwidth_size ApigwGatewayV2#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#description ApigwGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#id ApigwGatewayV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.ingressBandwidthChargingMode">ingress_bandwidth_charging_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#ingress_bandwidth_charging_mode ApigwGatewayV2#ingress_bandwidth_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.ingressBandwidthSize">ingress_bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#ingress_bandwidth_size ApigwGatewayV2#ingress_bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.loadbalancerProvider">loadbalancer_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#loadbalancer_provider ApigwGatewayV2#loadbalancer_provider}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.maintainBegin">maintain_begin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#maintain_begin ApigwGatewayV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.availabilityZones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#availability_zones ApigwGatewayV2#availability_zones}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#name ApigwGatewayV2#name}.

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.securityGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#security_group_id ApigwGatewayV2#security_group_id}.

---

##### `spec_id`<sup>Required</sup> <a name="spec_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.specId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#spec_id ApigwGatewayV2#spec_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#subnet_id ApigwGatewayV2#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#vpc_id ApigwGatewayV2#vpc_id}.

---

##### `bandwidth_charging_mode`<sup>Optional</sup> <a name="bandwidth_charging_mode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.bandwidthChargingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#bandwidth_charging_mode ApigwGatewayV2#bandwidth_charging_mode}.

---

##### `bandwidth_size`<sup>Optional</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.bandwidthSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#bandwidth_size ApigwGatewayV2#bandwidth_size}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#description ApigwGatewayV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#id ApigwGatewayV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_bandwidth_charging_mode`<sup>Optional</sup> <a name="ingress_bandwidth_charging_mode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.ingressBandwidthChargingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#ingress_bandwidth_charging_mode ApigwGatewayV2#ingress_bandwidth_charging_mode}.

---

##### `ingress_bandwidth_size`<sup>Optional</sup> <a name="ingress_bandwidth_size" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.ingressBandwidthSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#ingress_bandwidth_size ApigwGatewayV2#ingress_bandwidth_size}.

---

##### `loadbalancer_provider`<sup>Optional</sup> <a name="loadbalancer_provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.loadbalancerProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#loadbalancer_provider ApigwGatewayV2#loadbalancer_provider}.

---

##### `maintain_begin`<sup>Optional</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.maintainBegin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#maintain_begin ApigwGatewayV2#maintain_begin}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#timeouts ApigwGatewayV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetBandwidthChargingMode">reset_bandwidth_charging_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetBandwidthSize">reset_bandwidth_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetIngressBandwidthChargingMode">reset_ingress_bandwidth_charging_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetIngressBandwidthSize">reset_ingress_bandwidth_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetLoadbalancerProvider">reset_loadbalancer_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetMaintainBegin">reset_maintain_begin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#create ApigwGatewayV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#delete ApigwGatewayV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#update ApigwGatewayV2#update}.

---

##### `reset_bandwidth_charging_mode` <a name="reset_bandwidth_charging_mode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetBandwidthChargingMode"></a>

```python
def reset_bandwidth_charging_mode() -> None
```

##### `reset_bandwidth_size` <a name="reset_bandwidth_size" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetBandwidthSize"></a>

```python
def reset_bandwidth_size() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress_bandwidth_charging_mode` <a name="reset_ingress_bandwidth_charging_mode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetIngressBandwidthChargingMode"></a>

```python
def reset_ingress_bandwidth_charging_mode() -> None
```

##### `reset_ingress_bandwidth_size` <a name="reset_ingress_bandwidth_size" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetIngressBandwidthSize"></a>

```python
def reset_ingress_bandwidth_size() -> None
```

##### `reset_loadbalancer_provider` <a name="reset_loadbalancer_provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetLoadbalancerProvider"></a>

```python
def reset_loadbalancer_provider() -> None
```

##### `reset_maintain_begin` <a name="reset_maintain_begin" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetMaintainBegin"></a>

```python
def reset_maintain_begin() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigwGatewayV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_gateway_v2

apigwGatewayV2.ApigwGatewayV2.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_gateway_v2

apigwGatewayV2.ApigwGatewayV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_gateway_v2

apigwGatewayV2.ApigwGatewayV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_gateway_v2

apigwGatewayV2.ApigwGatewayV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigwGatewayV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigwGatewayV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigwGatewayV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigwGatewayV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainEnd">maintain_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.privateEgressAddresses">private_egress_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.publicEgressAddress">public_egress_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.supportedFeatures">supported_features</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference">ApigwGatewayV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcepServiceName">vpcep_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcIngressAddress">vpc_ingress_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.availabilityZonesInput">availability_zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthChargingModeInput">bandwidth_charging_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthSizeInput">bandwidth_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthChargingModeInput">ingress_bandwidth_charging_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthSizeInput">ingress_bandwidth_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.loadbalancerProviderInput">loadbalancer_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainBeginInput">maintain_begin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.securityGroupIdInput">security_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.specIdInput">spec_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthChargingMode">bandwidth_charging_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthSize">bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthChargingMode">ingress_bandwidth_charging_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthSize">ingress_bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.loadbalancerProvider">loadbalancer_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainBegin">maintain_begin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.specId">spec_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `maintain_end`<sup>Required</sup> <a name="maintain_end" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainEnd"></a>

```python
maintain_end: str
```

- *Type:* str

---

##### `private_egress_addresses`<sup>Required</sup> <a name="private_egress_addresses" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.privateEgressAddresses"></a>

```python
private_egress_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `public_egress_address`<sup>Required</sup> <a name="public_egress_address" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.publicEgressAddress"></a>

```python
public_egress_address: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `supported_features`<sup>Required</sup> <a name="supported_features" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.supportedFeatures"></a>

```python
supported_features: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.timeouts"></a>

```python
timeouts: ApigwGatewayV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference">ApigwGatewayV2TimeoutsOutputReference</a>

---

##### `vpcep_service_name`<sup>Required</sup> <a name="vpcep_service_name" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcepServiceName"></a>

```python
vpcep_service_name: str
```

- *Type:* str

---

##### `vpc_ingress_address`<sup>Required</sup> <a name="vpc_ingress_address" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcIngressAddress"></a>

```python
vpc_ingress_address: str
```

- *Type:* str

---

##### `availability_zones_input`<sup>Optional</sup> <a name="availability_zones_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.availabilityZonesInput"></a>

```python
availability_zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bandwidth_charging_mode_input`<sup>Optional</sup> <a name="bandwidth_charging_mode_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthChargingModeInput"></a>

```python
bandwidth_charging_mode_input: str
```

- *Type:* str

---

##### `bandwidth_size_input`<sup>Optional</sup> <a name="bandwidth_size_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthSizeInput"></a>

```python
bandwidth_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_bandwidth_charging_mode_input`<sup>Optional</sup> <a name="ingress_bandwidth_charging_mode_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthChargingModeInput"></a>

```python
ingress_bandwidth_charging_mode_input: str
```

- *Type:* str

---

##### `ingress_bandwidth_size_input`<sup>Optional</sup> <a name="ingress_bandwidth_size_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthSizeInput"></a>

```python
ingress_bandwidth_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `loadbalancer_provider_input`<sup>Optional</sup> <a name="loadbalancer_provider_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.loadbalancerProviderInput"></a>

```python
loadbalancer_provider_input: str
```

- *Type:* str

---

##### `maintain_begin_input`<sup>Optional</sup> <a name="maintain_begin_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainBeginInput"></a>

```python
maintain_begin_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `security_group_id_input`<sup>Optional</sup> <a name="security_group_id_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.securityGroupIdInput"></a>

```python
security_group_id_input: str
```

- *Type:* str

---

##### `spec_id_input`<sup>Optional</sup> <a name="spec_id_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.specIdInput"></a>

```python
spec_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigwGatewayV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bandwidth_charging_mode`<sup>Required</sup> <a name="bandwidth_charging_mode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthChargingMode"></a>

```python
bandwidth_charging_mode: str
```

- *Type:* str

---

##### `bandwidth_size`<sup>Required</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.bandwidthSize"></a>

```python
bandwidth_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_bandwidth_charging_mode`<sup>Required</sup> <a name="ingress_bandwidth_charging_mode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthChargingMode"></a>

```python
ingress_bandwidth_charging_mode: str
```

- *Type:* str

---

##### `ingress_bandwidth_size`<sup>Required</sup> <a name="ingress_bandwidth_size" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.ingressBandwidthSize"></a>

```python
ingress_bandwidth_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `loadbalancer_provider`<sup>Required</sup> <a name="loadbalancer_provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.loadbalancerProvider"></a>

```python
loadbalancer_provider: str
```

- *Type:* str

---

##### `maintain_begin`<sup>Required</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.maintainBegin"></a>

```python
maintain_begin: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `spec_id`<sup>Required</sup> <a name="spec_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.specId"></a>

```python
spec_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwGatewayV2Config <a name="ApigwGatewayV2Config" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_gateway_v2

apigwGatewayV2.ApigwGatewayV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_zones: typing.List[str],
  name: str,
  security_group_id: str,
  spec_id: str,
  subnet_id: str,
  vpc_id: str,
  bandwidth_charging_mode: str = None,
  bandwidth_size: typing.Union[int, float] = None,
  description: str = None,
  id: str = None,
  ingress_bandwidth_charging_mode: str = None,
  ingress_bandwidth_size: typing.Union[int, float] = None,
  loadbalancer_provider: str = None,
  maintain_begin: str = None,
  timeouts: ApigwGatewayV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#availability_zones ApigwGatewayV2#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#name ApigwGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.securityGroupId">security_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#security_group_id ApigwGatewayV2#security_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.specId">spec_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#spec_id ApigwGatewayV2#spec_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#subnet_id ApigwGatewayV2#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#vpc_id ApigwGatewayV2#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.bandwidthChargingMode">bandwidth_charging_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#bandwidth_charging_mode ApigwGatewayV2#bandwidth_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.bandwidthSize">bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#bandwidth_size ApigwGatewayV2#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#description ApigwGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#id ApigwGatewayV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.ingressBandwidthChargingMode">ingress_bandwidth_charging_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#ingress_bandwidth_charging_mode ApigwGatewayV2#ingress_bandwidth_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.ingressBandwidthSize">ingress_bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#ingress_bandwidth_size ApigwGatewayV2#ingress_bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.loadbalancerProvider">loadbalancer_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#loadbalancer_provider ApigwGatewayV2#loadbalancer_provider}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.maintainBegin">maintain_begin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#maintain_begin ApigwGatewayV2#maintain_begin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#availability_zones ApigwGatewayV2#availability_zones}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#name ApigwGatewayV2#name}.

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#security_group_id ApigwGatewayV2#security_group_id}.

---

##### `spec_id`<sup>Required</sup> <a name="spec_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.specId"></a>

```python
spec_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#spec_id ApigwGatewayV2#spec_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#subnet_id ApigwGatewayV2#subnet_id}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#vpc_id ApigwGatewayV2#vpc_id}.

---

##### `bandwidth_charging_mode`<sup>Optional</sup> <a name="bandwidth_charging_mode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.bandwidthChargingMode"></a>

```python
bandwidth_charging_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#bandwidth_charging_mode ApigwGatewayV2#bandwidth_charging_mode}.

---

##### `bandwidth_size`<sup>Optional</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.bandwidthSize"></a>

```python
bandwidth_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#bandwidth_size ApigwGatewayV2#bandwidth_size}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#description ApigwGatewayV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#id ApigwGatewayV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_bandwidth_charging_mode`<sup>Optional</sup> <a name="ingress_bandwidth_charging_mode" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.ingressBandwidthChargingMode"></a>

```python
ingress_bandwidth_charging_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#ingress_bandwidth_charging_mode ApigwGatewayV2#ingress_bandwidth_charging_mode}.

---

##### `ingress_bandwidth_size`<sup>Optional</sup> <a name="ingress_bandwidth_size" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.ingressBandwidthSize"></a>

```python
ingress_bandwidth_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#ingress_bandwidth_size ApigwGatewayV2#ingress_bandwidth_size}.

---

##### `loadbalancer_provider`<sup>Optional</sup> <a name="loadbalancer_provider" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.loadbalancerProvider"></a>

```python
loadbalancer_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#loadbalancer_provider ApigwGatewayV2#loadbalancer_provider}.

---

##### `maintain_begin`<sup>Optional</sup> <a name="maintain_begin" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.maintainBegin"></a>

```python
maintain_begin: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#maintain_begin ApigwGatewayV2#maintain_begin}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Config.property.timeouts"></a>

```python
timeouts: ApigwGatewayV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#timeouts ApigwGatewayV2#timeouts}

---

### ApigwGatewayV2Timeouts <a name="ApigwGatewayV2Timeouts" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_gateway_v2

apigwGatewayV2.ApigwGatewayV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#create ApigwGatewayV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#delete ApigwGatewayV2#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#update ApigwGatewayV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#create ApigwGatewayV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#delete ApigwGatewayV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/apigw_gateway_v2#update ApigwGatewayV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwGatewayV2TimeoutsOutputReference <a name="ApigwGatewayV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import apigw_gateway_v2

apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigwGatewayV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.apigwGatewayV2.ApigwGatewayV2Timeouts">ApigwGatewayV2Timeouts</a>]

---



