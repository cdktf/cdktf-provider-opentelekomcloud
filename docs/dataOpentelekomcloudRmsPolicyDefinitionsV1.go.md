# `dataOpentelekomcloudRmsPolicyDefinitionsV1` Submodule <a name="`dataOpentelekomcloudRmsPolicyDefinitionsV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudRmsPolicyDefinitionsV1 <a name="DataOpentelekomcloudRmsPolicyDefinitionsV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1 opentelekomcloud_rms_policy_definitions_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudrmspolicydefinitionsv1"

dataopentelekomcloudrmspolicydefinitionsv1.NewDataOpentelekomcloudRmsPolicyDefinitionsV1(scope Construct, id *string, config DataOpentelekomcloudRmsPolicyDefinitionsV1Config) DataOpentelekomcloudRmsPolicyDefinitionsV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config">DataOpentelekomcloudRmsPolicyDefinitionsV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config">DataOpentelekomcloudRmsPolicyDefinitionsV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetKeywords">ResetKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetPolicyRuleType">ResetPolicyRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetPolicyType">ResetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetTriggerType">ResetTriggerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetId"></a>

```go
func ResetId()
```

##### `ResetKeywords` <a name="ResetKeywords" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetKeywords"></a>

```go
func ResetKeywords()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetName"></a>

```go
func ResetName()
```

##### `ResetPolicyRuleType` <a name="ResetPolicyRuleType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetPolicyRuleType"></a>

```go
func ResetPolicyRuleType()
```

##### `ResetPolicyType` <a name="ResetPolicyType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetPolicyType"></a>

```go
func ResetPolicyType()
```

##### `ResetTriggerType` <a name="ResetTriggerType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.resetTriggerType"></a>

```go
func ResetTriggerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudRmsPolicyDefinitionsV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudrmspolicydefinitionsv1"

dataopentelekomcloudrmspolicydefinitionsv1.DataOpentelekomcloudRmsPolicyDefinitionsV1_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudrmspolicydefinitionsv1"

dataopentelekomcloudrmspolicydefinitionsv1.DataOpentelekomcloudRmsPolicyDefinitionsV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudrmspolicydefinitionsv1"

dataopentelekomcloudrmspolicydefinitionsv1.DataOpentelekomcloudRmsPolicyDefinitionsV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudrmspolicydefinitionsv1"

dataopentelekomcloudrmspolicydefinitionsv1.DataOpentelekomcloudRmsPolicyDefinitionsV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudRmsPolicyDefinitionsV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudRmsPolicyDefinitionsV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudRmsPolicyDefinitionsV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudRmsPolicyDefinitionsV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.definitions">Definitions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList">DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.keywordsInput">KeywordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyRuleTypeInput">PolicyRuleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyTypeInput">PolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.triggerTypeInput">TriggerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.keywords">Keywords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyRuleType">PolicyRuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.triggerType">TriggerType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Definitions`<sup>Required</sup> <a name="Definitions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.definitions"></a>

```go
func Definitions() DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList">DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeywordsInput`<sup>Optional</sup> <a name="KeywordsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.keywordsInput"></a>

```go
func KeywordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyRuleTypeInput`<sup>Optional</sup> <a name="PolicyRuleTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyRuleTypeInput"></a>

```go
func PolicyRuleTypeInput() *string
```

- *Type:* *string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyTypeInput"></a>

```go
func PolicyTypeInput() *string
```

- *Type:* *string

---

##### `TriggerTypeInput`<sup>Optional</sup> <a name="TriggerTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.triggerTypeInput"></a>

```go
func TriggerTypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.keywords"></a>

```go
func Keywords() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PolicyRuleType`<sup>Required</sup> <a name="PolicyRuleType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyRuleType"></a>

```go
func PolicyRuleType() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.triggerType"></a>

```go
func TriggerType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudRmsPolicyDefinitionsV1Config <a name="DataOpentelekomcloudRmsPolicyDefinitionsV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudrmspolicydefinitionsv1"

&dataopentelekomcloudrmspolicydefinitionsv1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Keywords: *[]*string,
	Name: *string,
	PolicyRuleType: *string,
	PolicyType: *string,
	TriggerType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1#id DataOpentelekomcloudRmsPolicyDefinitionsV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.keywords">Keywords</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1#keywords DataOpentelekomcloudRmsPolicyDefinitionsV1#keywords}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1#name DataOpentelekomcloudRmsPolicyDefinitionsV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.policyRuleType">PolicyRuleType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1#policy_rule_type DataOpentelekomcloudRmsPolicyDefinitionsV1#policy_rule_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.policyType">PolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1#policy_type DataOpentelekomcloudRmsPolicyDefinitionsV1#policy_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.triggerType">TriggerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1#trigger_type DataOpentelekomcloudRmsPolicyDefinitionsV1#trigger_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1#id DataOpentelekomcloudRmsPolicyDefinitionsV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Keywords`<sup>Optional</sup> <a name="Keywords" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.keywords"></a>

```go
Keywords *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1#keywords DataOpentelekomcloudRmsPolicyDefinitionsV1#keywords}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1#name DataOpentelekomcloudRmsPolicyDefinitionsV1#name}.

---

##### `PolicyRuleType`<sup>Optional</sup> <a name="PolicyRuleType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.policyRuleType"></a>

```go
PolicyRuleType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1#policy_rule_type DataOpentelekomcloudRmsPolicyDefinitionsV1#policy_rule_type}.

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.policyType"></a>

```go
PolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1#policy_type DataOpentelekomcloudRmsPolicyDefinitionsV1#policy_type}.

---

##### `TriggerType`<sup>Optional</sup> <a name="TriggerType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Config.property.triggerType"></a>

```go
TriggerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.29/docs/data-sources/rms_policy_definitions_v1#trigger_type DataOpentelekomcloudRmsPolicyDefinitionsV1#trigger_type}.

---

### DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions <a name="DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudrmspolicydefinitionsv1"

&dataopentelekomcloudrmspolicydefinitionsv1.DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList <a name="DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudrmspolicydefinitionsv1"

dataopentelekomcloudrmspolicydefinitionsv1.NewDataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference <a name="DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v11/dataopentelekomcloudrmspolicydefinitionsv1"

dataopentelekomcloudrmspolicydefinitionsv1.NewDataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.keywords">Keywords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.parameters">Parameters</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.policyRule">PolicyRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.policyRuleType">PolicyRuleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.triggerType">TriggerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions">DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.keywords"></a>

```go
func Keywords() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.parameters"></a>

```go
func Parameters() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `PolicyRule`<sup>Required</sup> <a name="PolicyRule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.policyRule"></a>

```go
func PolicyRule() *string
```

- *Type:* *string

---

##### `PolicyRuleType`<sup>Required</sup> <a name="PolicyRuleType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.policyRuleType"></a>

```go
func PolicyRuleType() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.triggerType"></a>

```go
func TriggerType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1DefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudRmsPolicyDefinitionsV1.DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions">DataOpentelekomcloudRmsPolicyDefinitionsV1Definitions</a>

---



