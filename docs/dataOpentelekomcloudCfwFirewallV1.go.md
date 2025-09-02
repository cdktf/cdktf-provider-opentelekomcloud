# `dataOpentelekomcloudCfwFirewallV1` Submodule <a name="`dataOpentelekomcloudCfwFirewallV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCfwFirewallV1 <a name="DataOpentelekomcloudCfwFirewallV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/cfw_firewall_v1 opentelekomcloud_cfw_firewall_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

dataopentelekomcloudcfwfirewallv1.NewDataOpentelekomcloudCfwFirewallV1(scope Construct, id *string, config DataOpentelekomcloudCfwFirewallV1Config) DataOpentelekomcloudCfwFirewallV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config">DataOpentelekomcloudCfwFirewallV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config">DataOpentelekomcloudCfwFirewallV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.resetServiceType">ResetServiceType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetServiceType` <a name="ResetServiceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.resetServiceType"></a>

```go
func ResetServiceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudCfwFirewallV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

dataopentelekomcloudcfwfirewallv1.DataOpentelekomcloudCfwFirewallV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

dataopentelekomcloudcfwfirewallv1.DataOpentelekomcloudCfwFirewallV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

dataopentelekomcloudcfwfirewallv1.DataOpentelekomcloudCfwFirewallV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

dataopentelekomcloudcfwfirewallv1.DataOpentelekomcloudCfwFirewallV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudCfwFirewallV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudCfwFirewallV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudCfwFirewallV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/cfw_firewall_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudCfwFirewallV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.chargeMode">ChargeMode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.engineType">EngineType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.featureToggle">FeatureToggle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.BooleanMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.flavor">Flavor</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList">DataOpentelekomcloudCfwFirewallV1FlavorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.haType">HaType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.isAvailableObs">IsAvailableObs</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.isOldFirewallInstance">IsOldFirewallInstance</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.isSupportThreatTags">IsSupportThreatTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.protectObjects">ProtectObjects</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList">DataOpentelekomcloudCfwFirewallV1ProtectObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList">DataOpentelekomcloudCfwFirewallV1ResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.status">Status</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.supportIpv6">SupportIpv6</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.supportUrlFiltering">SupportUrlFiltering</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ChargeMode`<sup>Required</sup> <a name="ChargeMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.chargeMode"></a>

```go
func ChargeMode() *f64
```

- *Type:* *f64

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.engineType"></a>

```go
func EngineType() *f64
```

- *Type:* *f64

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.enterpriseProjectId"></a>

```go
func EnterpriseProjectId() *string
```

- *Type:* *string

---

##### `FeatureToggle`<sup>Required</sup> <a name="FeatureToggle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.featureToggle"></a>

```go
func FeatureToggle() BooleanMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.BooleanMap

---

##### `Flavor`<sup>Required</sup> <a name="Flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.flavor"></a>

```go
func Flavor() DataOpentelekomcloudCfwFirewallV1FlavorList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList">DataOpentelekomcloudCfwFirewallV1FlavorList</a>

---

##### `HaType`<sup>Required</sup> <a name="HaType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.haType"></a>

```go
func HaType() *f64
```

- *Type:* *f64

---

##### `IsAvailableObs`<sup>Required</sup> <a name="IsAvailableObs" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.isAvailableObs"></a>

```go
func IsAvailableObs() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsOldFirewallInstance`<sup>Required</sup> <a name="IsOldFirewallInstance" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.isOldFirewallInstance"></a>

```go
func IsOldFirewallInstance() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSupportThreatTags`<sup>Required</sup> <a name="IsSupportThreatTags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.isSupportThreatTags"></a>

```go
func IsSupportThreatTags() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtectObjects`<sup>Required</sup> <a name="ProtectObjects" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.protectObjects"></a>

```go
func ProtectObjects() DataOpentelekomcloudCfwFirewallV1ProtectObjectsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList">DataOpentelekomcloudCfwFirewallV1ProtectObjectsList</a>

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.resources"></a>

```go
func Resources() DataOpentelekomcloudCfwFirewallV1ResourcesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList">DataOpentelekomcloudCfwFirewallV1ResourcesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.status"></a>

```go
func Status() *f64
```

- *Type:* *f64

---

##### `SupportIpv6`<sup>Required</sup> <a name="SupportIpv6" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.supportIpv6"></a>

```go
func SupportIpv6() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SupportUrlFiltering`<sup>Required</sup> <a name="SupportUrlFiltering" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.supportUrlFiltering"></a>

```go
func SupportUrlFiltering() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.serviceTypeInput"></a>

```go
func ServiceTypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCfwFirewallV1Config <a name="DataOpentelekomcloudCfwFirewallV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

&dataopentelekomcloudcfwfirewallv1.DataOpentelekomcloudCfwFirewallV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	ServiceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/cfw_firewall_v1#id DataOpentelekomcloudCfwFirewallV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.serviceType">ServiceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/cfw_firewall_v1#service_type DataOpentelekomcloudCfwFirewallV1#service_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/cfw_firewall_v1#id DataOpentelekomcloudCfwFirewallV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceType`<sup>Optional</sup> <a name="ServiceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Config.property.serviceType"></a>

```go
ServiceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/cfw_firewall_v1#service_type DataOpentelekomcloudCfwFirewallV1#service_type}.

---

### DataOpentelekomcloudCfwFirewallV1Flavor <a name="DataOpentelekomcloudCfwFirewallV1Flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Flavor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Flavor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

&dataopentelekomcloudcfwfirewallv1.DataOpentelekomcloudCfwFirewallV1Flavor {

}
```


### DataOpentelekomcloudCfwFirewallV1ProtectObjects <a name="DataOpentelekomcloudCfwFirewallV1ProtectObjects" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjects.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

&dataopentelekomcloudcfwfirewallv1.DataOpentelekomcloudCfwFirewallV1ProtectObjects {

}
```


### DataOpentelekomcloudCfwFirewallV1Resources <a name="DataOpentelekomcloudCfwFirewallV1Resources" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Resources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Resources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

&dataopentelekomcloudcfwfirewallv1.DataOpentelekomcloudCfwFirewallV1Resources {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCfwFirewallV1FlavorList <a name="DataOpentelekomcloudCfwFirewallV1FlavorList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

dataopentelekomcloudcfwfirewallv1.NewDataOpentelekomcloudCfwFirewallV1FlavorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudCfwFirewallV1FlavorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudCfwFirewallV1FlavorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudCfwFirewallV1FlavorOutputReference <a name="DataOpentelekomcloudCfwFirewallV1FlavorOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

dataopentelekomcloudcfwfirewallv1.NewDataOpentelekomcloudCfwFirewallV1FlavorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudCfwFirewallV1FlavorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.bandwidth">Bandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.defaultBandwidth">DefaultBandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.defaultEipCount">DefaultEipCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.defaultLogStorage">DefaultLogStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.defaultVpcCount">DefaultVpcCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.eipCount">EipCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.logStorage">LogStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.versionCode">VersionCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.vpcCount">VpcCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Flavor">DataOpentelekomcloudCfwFirewallV1Flavor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.bandwidth"></a>

```go
func Bandwidth() *f64
```

- *Type:* *f64

---

##### `DefaultBandwidth`<sup>Required</sup> <a name="DefaultBandwidth" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.defaultBandwidth"></a>

```go
func DefaultBandwidth() *f64
```

- *Type:* *f64

---

##### `DefaultEipCount`<sup>Required</sup> <a name="DefaultEipCount" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.defaultEipCount"></a>

```go
func DefaultEipCount() *f64
```

- *Type:* *f64

---

##### `DefaultLogStorage`<sup>Required</sup> <a name="DefaultLogStorage" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.defaultLogStorage"></a>

```go
func DefaultLogStorage() *f64
```

- *Type:* *f64

---

##### `DefaultVpcCount`<sup>Required</sup> <a name="DefaultVpcCount" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.defaultVpcCount"></a>

```go
func DefaultVpcCount() *f64
```

- *Type:* *f64

---

##### `EipCount`<sup>Required</sup> <a name="EipCount" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.eipCount"></a>

```go
func EipCount() *f64
```

- *Type:* *f64

---

##### `LogStorage`<sup>Required</sup> <a name="LogStorage" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.logStorage"></a>

```go
func LogStorage() *f64
```

- *Type:* *f64

---

##### `VersionCode`<sup>Required</sup> <a name="VersionCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.versionCode"></a>

```go
func VersionCode() *f64
```

- *Type:* *f64

---

##### `VpcCount`<sup>Required</sup> <a name="VpcCount" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.vpcCount"></a>

```go
func VpcCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1FlavorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudCfwFirewallV1Flavor
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Flavor">DataOpentelekomcloudCfwFirewallV1Flavor</a>

---


### DataOpentelekomcloudCfwFirewallV1ProtectObjectsList <a name="DataOpentelekomcloudCfwFirewallV1ProtectObjectsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

dataopentelekomcloudcfwfirewallv1.NewDataOpentelekomcloudCfwFirewallV1ProtectObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudCfwFirewallV1ProtectObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference <a name="DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

dataopentelekomcloudcfwfirewallv1.NewDataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.property.objectName">ObjectName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.property.type">Type</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjects">DataOpentelekomcloudCfwFirewallV1ProtectObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `ObjectName`<sup>Required</sup> <a name="ObjectName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.property.objectName"></a>

```go
func ObjectName() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.property.type"></a>

```go
func Type() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudCfwFirewallV1ProtectObjects
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ProtectObjects">DataOpentelekomcloudCfwFirewallV1ProtectObjects</a>

---


### DataOpentelekomcloudCfwFirewallV1ResourcesList <a name="DataOpentelekomcloudCfwFirewallV1ResourcesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

dataopentelekomcloudcfwfirewallv1.NewDataOpentelekomcloudCfwFirewallV1ResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudCfwFirewallV1ResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference <a name="DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudcfwfirewallv1"

dataopentelekomcloudcfwfirewallv1.NewDataOpentelekomcloudCfwFirewallV1ResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.cloudServiceType">CloudServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.resourceSize">ResourceSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.resourceSizeMeasureId">ResourceSizeMeasureId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.resourceSpecCode">ResourceSpecCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Resources">DataOpentelekomcloudCfwFirewallV1Resources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudServiceType`<sup>Required</sup> <a name="CloudServiceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.cloudServiceType"></a>

```go
func CloudServiceType() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceSize`<sup>Required</sup> <a name="ResourceSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.resourceSize"></a>

```go
func ResourceSize() *f64
```

- *Type:* *f64

---

##### `ResourceSizeMeasureId`<sup>Required</sup> <a name="ResourceSizeMeasureId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.resourceSizeMeasureId"></a>

```go
func ResourceSizeMeasureId() *f64
```

- *Type:* *f64

---

##### `ResourceSpecCode`<sup>Required</sup> <a name="ResourceSpecCode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.resourceSpecCode"></a>

```go
func ResourceSpecCode() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1ResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudCfwFirewallV1Resources
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCfwFirewallV1.DataOpentelekomcloudCfwFirewallV1Resources">DataOpentelekomcloudCfwFirewallV1Resources</a>

---



