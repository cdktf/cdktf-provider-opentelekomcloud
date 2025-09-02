# `dataOpentelekomcloudRmsPolicyStatesV1` Submodule <a name="`dataOpentelekomcloudRmsPolicyStatesV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRmsPolicyStatesV1 <a name="DataOpentelekomcloudRmsPolicyStatesV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/rms_policy_states_v1 opentelekomcloud_rms_policy_states_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmspolicystatesv1"

dataopentelekomcloudrmspolicystatesv1.NewDataOpentelekomcloudRmsPolicyStatesV1(scope Construct, id *string, config DataOpentelekomcloudRmsPolicyStatesV1Config) DataOpentelekomcloudRmsPolicyStatesV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config">DataOpentelekomcloudRmsPolicyStatesV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config">DataOpentelekomcloudRmsPolicyStatesV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetComplianceState">ResetComplianceState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetPolicyAssignmentId">ResetPolicyAssignmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetResourceName">ResetResourceName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetComplianceState` <a name="ResetComplianceState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetComplianceState"></a>

```go
func ResetComplianceState()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetId"></a>

```go
func ResetId()
```

##### `ResetPolicyAssignmentId` <a name="ResetPolicyAssignmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetPolicyAssignmentId"></a>

```go
func ResetPolicyAssignmentId()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetResourceName` <a name="ResetResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.resetResourceName"></a>

```go
func ResetResourceName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudRmsPolicyStatesV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmspolicystatesv1"

dataopentelekomcloudrmspolicystatesv1.DataOpentelekomcloudRmsPolicyStatesV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmspolicystatesv1"

dataopentelekomcloudrmspolicystatesv1.DataOpentelekomcloudRmsPolicyStatesV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmspolicystatesv1"

dataopentelekomcloudrmspolicystatesv1.DataOpentelekomcloudRmsPolicyStatesV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmspolicystatesv1"

dataopentelekomcloudrmspolicystatesv1.DataOpentelekomcloudRmsPolicyStatesV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudRmsPolicyStatesV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudRmsPolicyStatesV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudRmsPolicyStatesV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/rms_policy_states_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudRmsPolicyStatesV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.states">States</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList">DataOpentelekomcloudRmsPolicyStatesV1StatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.complianceStateInput">ComplianceStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.policyAssignmentIdInput">PolicyAssignmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceNameInput">ResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.complianceState">ComplianceState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `States`<sup>Required</sup> <a name="States" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.states"></a>

```go
func States() DataOpentelekomcloudRmsPolicyStatesV1StatesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList">DataOpentelekomcloudRmsPolicyStatesV1StatesList</a>

---

##### `ComplianceStateInput`<sup>Optional</sup> <a name="ComplianceStateInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.complianceStateInput"></a>

```go
func ComplianceStateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PolicyAssignmentIdInput`<sup>Optional</sup> <a name="PolicyAssignmentIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.policyAssignmentIdInput"></a>

```go
func PolicyAssignmentIdInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceNameInput"></a>

```go
func ResourceNameInput() *string
```

- *Type:* *string

---

##### `ComplianceState`<sup>Required</sup> <a name="ComplianceState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.complianceState"></a>

```go
func ComplianceState() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.policyAssignmentId"></a>

```go
func PolicyAssignmentId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRmsPolicyStatesV1Config <a name="DataOpentelekomcloudRmsPolicyStatesV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmspolicystatesv1"

&dataopentelekomcloudrmspolicystatesv1.DataOpentelekomcloudRmsPolicyStatesV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ComplianceState: *string,
	Id: *string,
	PolicyAssignmentId: *string,
	ResourceId: *string,
	ResourceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.complianceState">ComplianceState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/rms_policy_states_v1#compliance_state DataOpentelekomcloudRmsPolicyStatesV1#compliance_state}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/rms_policy_states_v1#id DataOpentelekomcloudRmsPolicyStatesV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/rms_policy_states_v1#policy_assignment_id DataOpentelekomcloudRmsPolicyStatesV1#policy_assignment_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/rms_policy_states_v1#resource_id DataOpentelekomcloudRmsPolicyStatesV1#resource_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.resourceName">ResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/rms_policy_states_v1#resource_name DataOpentelekomcloudRmsPolicyStatesV1#resource_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComplianceState`<sup>Optional</sup> <a name="ComplianceState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.complianceState"></a>

```go
ComplianceState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/rms_policy_states_v1#compliance_state DataOpentelekomcloudRmsPolicyStatesV1#compliance_state}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/rms_policy_states_v1#id DataOpentelekomcloudRmsPolicyStatesV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyAssignmentId`<sup>Optional</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.policyAssignmentId"></a>

```go
PolicyAssignmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/rms_policy_states_v1#policy_assignment_id DataOpentelekomcloudRmsPolicyStatesV1#policy_assignment_id}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/rms_policy_states_v1#resource_id DataOpentelekomcloudRmsPolicyStatesV1#resource_id}.

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1Config.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/data-sources/rms_policy_states_v1#resource_name DataOpentelekomcloudRmsPolicyStatesV1#resource_name}.

---

### DataOpentelekomcloudRmsPolicyStatesV1States <a name="DataOpentelekomcloudRmsPolicyStatesV1States" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1States"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1States.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmspolicystatesv1"

&dataopentelekomcloudrmspolicystatesv1.DataOpentelekomcloudRmsPolicyStatesV1States {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudRmsPolicyStatesV1StatesList <a name="DataOpentelekomcloudRmsPolicyStatesV1StatesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmspolicystatesv1"

dataopentelekomcloudrmspolicystatesv1.NewDataOpentelekomcloudRmsPolicyStatesV1StatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudRmsPolicyStatesV1StatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference <a name="DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudrmspolicystatesv1"

dataopentelekomcloudrmspolicystatesv1.NewDataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.complianceState">ComplianceState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.evaluationTime">EvaluationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyAssignmentId">PolicyAssignmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyAssignmentName">PolicyAssignmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyDefinitionId">PolicyDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.regionId">RegionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceProvider">ResourceProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.triggerType">TriggerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1States">DataOpentelekomcloudRmsPolicyStatesV1States</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComplianceState`<sup>Required</sup> <a name="ComplianceState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.complianceState"></a>

```go
func ComplianceState() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `EvaluationTime`<sup>Required</sup> <a name="EvaluationTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.evaluationTime"></a>

```go
func EvaluationTime() *string
```

- *Type:* *string

---

##### `PolicyAssignmentId`<sup>Required</sup> <a name="PolicyAssignmentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyAssignmentId"></a>

```go
func PolicyAssignmentId() *string
```

- *Type:* *string

---

##### `PolicyAssignmentName`<sup>Required</sup> <a name="PolicyAssignmentName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyAssignmentName"></a>

```go
func PolicyAssignmentName() *string
```

- *Type:* *string

---

##### `PolicyDefinitionId`<sup>Required</sup> <a name="PolicyDefinitionId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.policyDefinitionId"></a>

```go
func PolicyDefinitionId() *string
```

- *Type:* *string

---

##### `RegionId`<sup>Required</sup> <a name="RegionId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.regionId"></a>

```go
func RegionId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `ResourceProvider`<sup>Required</sup> <a name="ResourceProvider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceProvider"></a>

```go
func ResourceProvider() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.triggerType"></a>

```go
func TriggerType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1StatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudRmsPolicyStatesV1States
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyStatesV1.DataOpentelekomcloudRmsPolicyStatesV1States">DataOpentelekomcloudRmsPolicyStatesV1States</a>

---



