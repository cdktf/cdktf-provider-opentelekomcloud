# `dataOpentelekomcloudNatDnatRulesV2` Submodule <a name="`dataOpentelekomcloudNatDnatRulesV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudNatDnatRulesV2 <a name="DataOpentelekomcloudNatDnatRulesV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2 opentelekomcloud_nat_dnat_rules_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_dnat_rules_v2

dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  external_service_port: typing.Union[int, float] = None,
  floating_ip_address: str = None,
  floating_ip_id: str = None,
  gateway_id: str = None,
  id: str = None,
  internal_service_port: typing.Union[int, float] = None,
  port_id: str = None,
  private_ip: str = None,
  protocol: str = None,
  rule_id: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#description DataOpentelekomcloudNatDnatRulesV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.externalServicePort">external_service_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#external_service_port DataOpentelekomcloudNatDnatRulesV2#external_service_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.floatingIpAddress">floating_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#floating_ip_address DataOpentelekomcloudNatDnatRulesV2#floating_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.floatingIpId">floating_ip_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#floating_ip_id DataOpentelekomcloudNatDnatRulesV2#floating_ip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#gateway_id DataOpentelekomcloudNatDnatRulesV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#id DataOpentelekomcloudNatDnatRulesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.internalServicePort">internal_service_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#internal_service_port DataOpentelekomcloudNatDnatRulesV2#internal_service_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.portId">port_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#port_id DataOpentelekomcloudNatDnatRulesV2#port_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#private_ip DataOpentelekomcloudNatDnatRulesV2#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#protocol DataOpentelekomcloudNatDnatRulesV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.ruleId">rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#rule_id DataOpentelekomcloudNatDnatRulesV2#rule_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#status DataOpentelekomcloudNatDnatRulesV2#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#description DataOpentelekomcloudNatDnatRulesV2#description}.

---

##### `external_service_port`<sup>Optional</sup> <a name="external_service_port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.externalServicePort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#external_service_port DataOpentelekomcloudNatDnatRulesV2#external_service_port}.

---

##### `floating_ip_address`<sup>Optional</sup> <a name="floating_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.floatingIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#floating_ip_address DataOpentelekomcloudNatDnatRulesV2#floating_ip_address}.

---

##### `floating_ip_id`<sup>Optional</sup> <a name="floating_ip_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.floatingIpId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#floating_ip_id DataOpentelekomcloudNatDnatRulesV2#floating_ip_id}.

---

##### `gateway_id`<sup>Optional</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.gatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#gateway_id DataOpentelekomcloudNatDnatRulesV2#gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#id DataOpentelekomcloudNatDnatRulesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internal_service_port`<sup>Optional</sup> <a name="internal_service_port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.internalServicePort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#internal_service_port DataOpentelekomcloudNatDnatRulesV2#internal_service_port}.

---

##### `port_id`<sup>Optional</sup> <a name="port_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.portId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#port_id DataOpentelekomcloudNatDnatRulesV2#port_id}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.privateIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#private_ip DataOpentelekomcloudNatDnatRulesV2#private_ip}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#protocol DataOpentelekomcloudNatDnatRulesV2#protocol}.

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.ruleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#rule_id DataOpentelekomcloudNatDnatRulesV2#rule_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#status DataOpentelekomcloudNatDnatRulesV2#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetExternalServicePort">reset_external_service_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetFloatingIpAddress">reset_floating_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetFloatingIpId">reset_floating_ip_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetGatewayId">reset_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetInternalServicePort">reset_internal_service_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetPortId">reset_port_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetPrivateIp">reset_private_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetRuleId">reset_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_external_service_port` <a name="reset_external_service_port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetExternalServicePort"></a>

```python
def reset_external_service_port() -> None
```

##### `reset_floating_ip_address` <a name="reset_floating_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetFloatingIpAddress"></a>

```python
def reset_floating_ip_address() -> None
```

##### `reset_floating_ip_id` <a name="reset_floating_ip_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetFloatingIpId"></a>

```python
def reset_floating_ip_id() -> None
```

##### `reset_gateway_id` <a name="reset_gateway_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetGatewayId"></a>

```python
def reset_gateway_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_internal_service_port` <a name="reset_internal_service_port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetInternalServicePort"></a>

```python
def reset_internal_service_port() -> None
```

##### `reset_port_id` <a name="reset_port_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetPortId"></a>

```python
def reset_port_id() -> None
```

##### `reset_private_ip` <a name="reset_private_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetPrivateIp"></a>

```python
def reset_private_ip() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_rule_id` <a name="reset_rule_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetRuleId"></a>

```python
def reset_rule_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudNatDnatRulesV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_dnat_rules_v2

dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_dnat_rules_v2

dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_dnat_rules_v2

dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_dnat_rules_v2

dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudNatDnatRulesV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudNatDnatRulesV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudNatDnatRulesV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudNatDnatRulesV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList">DataOpentelekomcloudNatDnatRulesV2RulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.externalServicePortInput">external_service_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpAddressInput">floating_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpIdInput">floating_ip_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.internalServicePortInput">internal_service_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.portIdInput">port_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.privateIpInput">private_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.externalServicePort">external_service_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpAddress">floating_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpId">floating_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.internalServicePort">internal_service_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.portId">port_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.rules"></a>

```python
rules: DataOpentelekomcloudNatDnatRulesV2RulesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList">DataOpentelekomcloudNatDnatRulesV2RulesList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `external_service_port_input`<sup>Optional</sup> <a name="external_service_port_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.externalServicePortInput"></a>

```python
external_service_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `floating_ip_address_input`<sup>Optional</sup> <a name="floating_ip_address_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpAddressInput"></a>

```python
floating_ip_address_input: str
```

- *Type:* str

---

##### `floating_ip_id_input`<sup>Optional</sup> <a name="floating_ip_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpIdInput"></a>

```python
floating_ip_id_input: str
```

- *Type:* str

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internal_service_port_input`<sup>Optional</sup> <a name="internal_service_port_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.internalServicePortInput"></a>

```python
internal_service_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_id_input`<sup>Optional</sup> <a name="port_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.portIdInput"></a>

```python
port_id_input: str
```

- *Type:* str

---

##### `private_ip_input`<sup>Optional</sup> <a name="private_ip_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.privateIpInput"></a>

```python
private_ip_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_service_port`<sup>Required</sup> <a name="external_service_port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.externalServicePort"></a>

```python
external_service_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `floating_ip_address`<sup>Required</sup> <a name="floating_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpAddress"></a>

```python
floating_ip_address: str
```

- *Type:* str

---

##### `floating_ip_id`<sup>Required</sup> <a name="floating_ip_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.floatingIpId"></a>

```python
floating_ip_id: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_service_port`<sup>Required</sup> <a name="internal_service_port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.internalServicePort"></a>

```python
internal_service_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_id`<sup>Required</sup> <a name="port_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.portId"></a>

```python
port_id: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudNatDnatRulesV2Config <a name="DataOpentelekomcloudNatDnatRulesV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_dnat_rules_v2

dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  external_service_port: typing.Union[int, float] = None,
  floating_ip_address: str = None,
  floating_ip_id: str = None,
  gateway_id: str = None,
  id: str = None,
  internal_service_port: typing.Union[int, float] = None,
  port_id: str = None,
  private_ip: str = None,
  protocol: str = None,
  rule_id: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#description DataOpentelekomcloudNatDnatRulesV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.externalServicePort">external_service_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#external_service_port DataOpentelekomcloudNatDnatRulesV2#external_service_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.floatingIpAddress">floating_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#floating_ip_address DataOpentelekomcloudNatDnatRulesV2#floating_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.floatingIpId">floating_ip_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#floating_ip_id DataOpentelekomcloudNatDnatRulesV2#floating_ip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#gateway_id DataOpentelekomcloudNatDnatRulesV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#id DataOpentelekomcloudNatDnatRulesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.internalServicePort">internal_service_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#internal_service_port DataOpentelekomcloudNatDnatRulesV2#internal_service_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.portId">port_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#port_id DataOpentelekomcloudNatDnatRulesV2#port_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.privateIp">private_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#private_ip DataOpentelekomcloudNatDnatRulesV2#private_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#protocol DataOpentelekomcloudNatDnatRulesV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.ruleId">rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#rule_id DataOpentelekomcloudNatDnatRulesV2#rule_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#status DataOpentelekomcloudNatDnatRulesV2#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#description DataOpentelekomcloudNatDnatRulesV2#description}.

---

##### `external_service_port`<sup>Optional</sup> <a name="external_service_port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.externalServicePort"></a>

```python
external_service_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#external_service_port DataOpentelekomcloudNatDnatRulesV2#external_service_port}.

---

##### `floating_ip_address`<sup>Optional</sup> <a name="floating_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.floatingIpAddress"></a>

```python
floating_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#floating_ip_address DataOpentelekomcloudNatDnatRulesV2#floating_ip_address}.

---

##### `floating_ip_id`<sup>Optional</sup> <a name="floating_ip_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.floatingIpId"></a>

```python
floating_ip_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#floating_ip_id DataOpentelekomcloudNatDnatRulesV2#floating_ip_id}.

---

##### `gateway_id`<sup>Optional</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#gateway_id DataOpentelekomcloudNatDnatRulesV2#gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#id DataOpentelekomcloudNatDnatRulesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internal_service_port`<sup>Optional</sup> <a name="internal_service_port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.internalServicePort"></a>

```python
internal_service_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#internal_service_port DataOpentelekomcloudNatDnatRulesV2#internal_service_port}.

---

##### `port_id`<sup>Optional</sup> <a name="port_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.portId"></a>

```python
port_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#port_id DataOpentelekomcloudNatDnatRulesV2#port_id}.

---

##### `private_ip`<sup>Optional</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#private_ip DataOpentelekomcloudNatDnatRulesV2#private_ip}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#protocol DataOpentelekomcloudNatDnatRulesV2#protocol}.

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#rule_id DataOpentelekomcloudNatDnatRulesV2#rule_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/data-sources/nat_dnat_rules_v2#status DataOpentelekomcloudNatDnatRulesV2#status}.

---

### DataOpentelekomcloudNatDnatRulesV2Rules <a name="DataOpentelekomcloudNatDnatRulesV2Rules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Rules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Rules.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_dnat_rules_v2

dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Rules()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudNatDnatRulesV2RulesList <a name="DataOpentelekomcloudNatDnatRulesV2RulesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_dnat_rules_v2

dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudNatDnatRulesV2RulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudNatDnatRulesV2RulesOutputReference <a name="DataOpentelekomcloudNatDnatRulesV2RulesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_dnat_rules_v2

dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.externalServicePort">external_service_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.floatingIpAddress">floating_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.floatingIpId">floating_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.internalServicePort">internal_service_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.portId">port_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Rules">DataOpentelekomcloudNatDnatRulesV2Rules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `external_service_port`<sup>Required</sup> <a name="external_service_port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.externalServicePort"></a>

```python
external_service_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `floating_ip_address`<sup>Required</sup> <a name="floating_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.floatingIpAddress"></a>

```python
floating_ip_address: str
```

- *Type:* str

---

##### `floating_ip_id`<sup>Required</sup> <a name="floating_ip_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.floatingIpId"></a>

```python
floating_ip_id: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_service_port`<sup>Required</sup> <a name="internal_service_port" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.internalServicePort"></a>

```python
internal_service_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_id`<sup>Required</sup> <a name="port_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.portId"></a>

```python
port_id: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2RulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudNatDnatRulesV2Rules
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatDnatRulesV2.DataOpentelekomcloudNatDnatRulesV2Rules">DataOpentelekomcloudNatDnatRulesV2Rules</a>

---



