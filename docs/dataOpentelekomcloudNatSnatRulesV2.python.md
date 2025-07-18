# `dataOpentelekomcloudNatSnatRulesV2` Submodule <a name="`dataOpentelekomcloudNatSnatRulesV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudNatSnatRulesV2 <a name="DataOpentelekomcloudNatSnatRulesV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2 opentelekomcloud_nat_snat_rules_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_snat_rules_v2

dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cidr: str = None,
  description: str = None,
  floating_ip_address: str = None,
  floating_ip_id: str = None,
  gateway_id: str = None,
  id: str = None,
  project_id: str = None,
  rule_id: str = None,
  source_type: typing.Union[int, float] = None,
  status: str = None,
  subnet_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#cidr DataOpentelekomcloudNatSnatRulesV2#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#description DataOpentelekomcloudNatSnatRulesV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.floatingIpAddress">floating_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#floating_ip_address DataOpentelekomcloudNatSnatRulesV2#floating_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.floatingIpId">floating_ip_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#floating_ip_id DataOpentelekomcloudNatSnatRulesV2#floating_ip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#gateway_id DataOpentelekomcloudNatSnatRulesV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#id DataOpentelekomcloudNatSnatRulesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#project_id DataOpentelekomcloudNatSnatRulesV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.ruleId">rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#rule_id DataOpentelekomcloudNatSnatRulesV2#rule_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.sourceType">source_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#source_type DataOpentelekomcloudNatSnatRulesV2#source_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#status DataOpentelekomcloudNatSnatRulesV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#subnet_id DataOpentelekomcloudNatSnatRulesV2#subnet_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#cidr DataOpentelekomcloudNatSnatRulesV2#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#description DataOpentelekomcloudNatSnatRulesV2#description}.

---

##### `floating_ip_address`<sup>Optional</sup> <a name="floating_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.floatingIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#floating_ip_address DataOpentelekomcloudNatSnatRulesV2#floating_ip_address}.

---

##### `floating_ip_id`<sup>Optional</sup> <a name="floating_ip_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.floatingIpId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#floating_ip_id DataOpentelekomcloudNatSnatRulesV2#floating_ip_id}.

---

##### `gateway_id`<sup>Optional</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.gatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#gateway_id DataOpentelekomcloudNatSnatRulesV2#gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#id DataOpentelekomcloudNatSnatRulesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#project_id DataOpentelekomcloudNatSnatRulesV2#project_id}.

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.ruleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#rule_id DataOpentelekomcloudNatSnatRulesV2#rule_id}.

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.sourceType"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#source_type DataOpentelekomcloudNatSnatRulesV2#source_type}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#status DataOpentelekomcloudNatSnatRulesV2#status}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#subnet_id DataOpentelekomcloudNatSnatRulesV2#subnet_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetCidr">reset_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetFloatingIpAddress">reset_floating_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetFloatingIpId">reset_floating_ip_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetGatewayId">reset_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetRuleId">reset_rule_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetSourceType">reset_source_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cidr` <a name="reset_cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetCidr"></a>

```python
def reset_cidr() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_floating_ip_address` <a name="reset_floating_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetFloatingIpAddress"></a>

```python
def reset_floating_ip_address() -> None
```

##### `reset_floating_ip_id` <a name="reset_floating_ip_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetFloatingIpId"></a>

```python
def reset_floating_ip_id() -> None
```

##### `reset_gateway_id` <a name="reset_gateway_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetGatewayId"></a>

```python
def reset_gateway_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_rule_id` <a name="reset_rule_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetRuleId"></a>

```python
def reset_rule_id() -> None
```

##### `reset_source_type` <a name="reset_source_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetSourceType"></a>

```python
def reset_source_type() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudNatSnatRulesV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_snat_rules_v2

dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_snat_rules_v2

dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_snat_rules_v2

dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_snat_rules_v2

dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudNatSnatRulesV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudNatSnatRulesV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudNatSnatRulesV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudNatSnatRulesV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList">DataOpentelekomcloudNatSnatRulesV2RulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpAddressInput">floating_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpIdInput">floating_ip_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.sourceTypeInput">source_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpAddress">floating_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpId">floating_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.sourceType">source_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.rules"></a>

```python
rules: DataOpentelekomcloudNatSnatRulesV2RulesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList">DataOpentelekomcloudNatSnatRulesV2RulesList</a>

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `floating_ip_address_input`<sup>Optional</sup> <a name="floating_ip_address_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpAddressInput"></a>

```python
floating_ip_address_input: str
```

- *Type:* str

---

##### `floating_ip_id_input`<sup>Optional</sup> <a name="floating_ip_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpIdInput"></a>

```python
floating_ip_id_input: str
```

- *Type:* str

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.sourceTypeInput"></a>

```python
source_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `floating_ip_address`<sup>Required</sup> <a name="floating_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpAddress"></a>

```python
floating_ip_address: str
```

- *Type:* str

---

##### `floating_ip_id`<sup>Required</sup> <a name="floating_ip_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpId"></a>

```python
floating_ip_id: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.sourceType"></a>

```python
source_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudNatSnatRulesV2Config <a name="DataOpentelekomcloudNatSnatRulesV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_snat_rules_v2

dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cidr: str = None,
  description: str = None,
  floating_ip_address: str = None,
  floating_ip_id: str = None,
  gateway_id: str = None,
  id: str = None,
  project_id: str = None,
  rule_id: str = None,
  source_type: typing.Union[int, float] = None,
  status: str = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.cidr">cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#cidr DataOpentelekomcloudNatSnatRulesV2#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#description DataOpentelekomcloudNatSnatRulesV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.floatingIpAddress">floating_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#floating_ip_address DataOpentelekomcloudNatSnatRulesV2#floating_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.floatingIpId">floating_ip_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#floating_ip_id DataOpentelekomcloudNatSnatRulesV2#floating_ip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#gateway_id DataOpentelekomcloudNatSnatRulesV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#id DataOpentelekomcloudNatSnatRulesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#project_id DataOpentelekomcloudNatSnatRulesV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.ruleId">rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#rule_id DataOpentelekomcloudNatSnatRulesV2#rule_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.sourceType">source_type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#source_type DataOpentelekomcloudNatSnatRulesV2#source_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#status DataOpentelekomcloudNatSnatRulesV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#subnet_id DataOpentelekomcloudNatSnatRulesV2#subnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#cidr DataOpentelekomcloudNatSnatRulesV2#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#description DataOpentelekomcloudNatSnatRulesV2#description}.

---

##### `floating_ip_address`<sup>Optional</sup> <a name="floating_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.floatingIpAddress"></a>

```python
floating_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#floating_ip_address DataOpentelekomcloudNatSnatRulesV2#floating_ip_address}.

---

##### `floating_ip_id`<sup>Optional</sup> <a name="floating_ip_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.floatingIpId"></a>

```python
floating_ip_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#floating_ip_id DataOpentelekomcloudNatSnatRulesV2#floating_ip_id}.

---

##### `gateway_id`<sup>Optional</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#gateway_id DataOpentelekomcloudNatSnatRulesV2#gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#id DataOpentelekomcloudNatSnatRulesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#project_id DataOpentelekomcloudNatSnatRulesV2#project_id}.

---

##### `rule_id`<sup>Optional</sup> <a name="rule_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#rule_id DataOpentelekomcloudNatSnatRulesV2#rule_id}.

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.sourceType"></a>

```python
source_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#source_type DataOpentelekomcloudNatSnatRulesV2#source_type}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#status DataOpentelekomcloudNatSnatRulesV2#status}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.43/docs/data-sources/nat_snat_rules_v2#subnet_id DataOpentelekomcloudNatSnatRulesV2#subnet_id}.

---

### DataOpentelekomcloudNatSnatRulesV2Rules <a name="DataOpentelekomcloudNatSnatRulesV2Rules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_snat_rules_v2

dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudNatSnatRulesV2RulesList <a name="DataOpentelekomcloudNatSnatRulesV2RulesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_snat_rules_v2

dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudNatSnatRulesV2RulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudNatSnatRulesV2RulesOutputReference <a name="DataOpentelekomcloudNatSnatRulesV2RulesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_nat_snat_rules_v2

dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.adminStateUp">admin_state_up</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.floatingIpAddress">floating_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.floatingIpId">floating_ip_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.sourceType">source_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules">DataOpentelekomcloudNatSnatRulesV2Rules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_state_up`<sup>Required</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.adminStateUp"></a>

```python
admin_state_up: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `floating_ip_address`<sup>Required</sup> <a name="floating_ip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.floatingIpAddress"></a>

```python
floating_ip_address: str
```

- *Type:* str

---

##### `floating_ip_id`<sup>Required</sup> <a name="floating_ip_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.floatingIpId"></a>

```python
floating_ip_id: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.sourceType"></a>

```python
source_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudNatSnatRulesV2Rules
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules">DataOpentelekomcloudNatSnatRulesV2Rules</a>

---



