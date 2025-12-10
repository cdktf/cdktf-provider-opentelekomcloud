# `dataOpentelekomcloudFgsFunctionsV2` Submodule <a name="`dataOpentelekomcloudFgsFunctionsV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudFgsFunctionsV2 <a name="DataOpentelekomcloudFgsFunctionsV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2 opentelekomcloud_fgs_functions_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudfgsfunctionsv2"

dataopentelekomcloudfgsfunctionsv2.NewDataOpentelekomcloudFgsFunctionsV2(scope Construct, id *string, config DataOpentelekomcloudFgsFunctionsV2Config) DataOpentelekomcloudFgsFunctionsV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config">DataOpentelekomcloudFgsFunctionsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config">DataOpentelekomcloudFgsFunctionsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetEnterpriseProjectId">ResetEnterpriseProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetPackageName">ResetPackageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetUrn">ResetUrn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEnterpriseProjectId` <a name="ResetEnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetEnterpriseProjectId"></a>

```go
func ResetEnterpriseProjectId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetName"></a>

```go
func ResetName()
```

##### `ResetPackageName` <a name="ResetPackageName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetPackageName"></a>

```go
func ResetPackageName()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetRuntime"></a>

```go
func ResetRuntime()
```

##### `ResetUrn` <a name="ResetUrn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.resetUrn"></a>

```go
func ResetUrn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudFgsFunctionsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudfgsfunctionsv2"

dataopentelekomcloudfgsfunctionsv2.DataOpentelekomcloudFgsFunctionsV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudfgsfunctionsv2"

dataopentelekomcloudfgsfunctionsv2.DataOpentelekomcloudFgsFunctionsV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudfgsfunctionsv2"

dataopentelekomcloudfgsfunctionsv2.DataOpentelekomcloudFgsFunctionsV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudfgsfunctionsv2"

dataopentelekomcloudfgsfunctionsv2.DataOpentelekomcloudFgsFunctionsV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudFgsFunctionsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudFgsFunctionsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudFgsFunctionsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudFgsFunctionsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.functions">Functions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList">DataOpentelekomcloudFgsFunctionsV2FunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.enterpriseProjectIdInput">EnterpriseProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.packageNameInput">PackageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.urnInput">UrnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.packageName">PackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.urn">Urn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.functions"></a>

```go
func Functions() DataOpentelekomcloudFgsFunctionsV2FunctionsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList">DataOpentelekomcloudFgsFunctionsV2FunctionsList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `EnterpriseProjectIdInput`<sup>Optional</sup> <a name="EnterpriseProjectIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.enterpriseProjectIdInput"></a>

```go
func EnterpriseProjectIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PackageNameInput`<sup>Optional</sup> <a name="PackageNameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.packageNameInput"></a>

```go
func PackageNameInput() *string
```

- *Type:* *string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `UrnInput`<sup>Optional</sup> <a name="UrnInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.urnInput"></a>

```go
func UrnInput() *string
```

- *Type:* *string

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.enterpriseProjectId"></a>

```go
func EnterpriseProjectId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.packageName"></a>

```go
func PackageName() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.urn"></a>

```go
func Urn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudFgsFunctionsV2Config <a name="DataOpentelekomcloudFgsFunctionsV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudfgsfunctionsv2"

&dataopentelekomcloudfgsfunctionsv2.DataOpentelekomcloudFgsFunctionsV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnterpriseProjectId: *string,
	Id: *string,
	Name: *string,
	PackageName: *string,
	Runtime: *string,
	Urn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2#enterprise_project_id DataOpentelekomcloudFgsFunctionsV2#enterprise_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2#id DataOpentelekomcloudFgsFunctionsV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2#name DataOpentelekomcloudFgsFunctionsV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.packageName">PackageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2#package_name DataOpentelekomcloudFgsFunctionsV2#package_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.runtime">Runtime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2#runtime DataOpentelekomcloudFgsFunctionsV2#runtime}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.urn">Urn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2#urn DataOpentelekomcloudFgsFunctionsV2#urn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnterpriseProjectId`<sup>Optional</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.enterpriseProjectId"></a>

```go
EnterpriseProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2#enterprise_project_id DataOpentelekomcloudFgsFunctionsV2#enterprise_project_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2#id DataOpentelekomcloudFgsFunctionsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2#name DataOpentelekomcloudFgsFunctionsV2#name}.

---

##### `PackageName`<sup>Optional</sup> <a name="PackageName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.packageName"></a>

```go
PackageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2#package_name DataOpentelekomcloudFgsFunctionsV2#package_name}.

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2#runtime DataOpentelekomcloudFgsFunctionsV2#runtime}.

---

##### `Urn`<sup>Optional</sup> <a name="Urn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Config.property.urn"></a>

```go
Urn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/fgs_functions_v2#urn DataOpentelekomcloudFgsFunctionsV2#urn}.

---

### DataOpentelekomcloudFgsFunctionsV2Functions <a name="DataOpentelekomcloudFgsFunctionsV2Functions" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Functions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Functions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudfgsfunctionsv2"

&dataopentelekomcloudfgsfunctionsv2.DataOpentelekomcloudFgsFunctionsV2Functions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudFgsFunctionsV2FunctionsList <a name="DataOpentelekomcloudFgsFunctionsV2FunctionsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudfgsfunctionsv2"

dataopentelekomcloudfgsfunctionsv2.NewDataOpentelekomcloudFgsFunctionsV2FunctionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudFgsFunctionsV2FunctionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference <a name="DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudfgsfunctionsv2"

dataopentelekomcloudfgsfunctionsv2.NewDataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.appAgency">AppAgency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeFilename">CodeFilename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeType">CodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeUrl">CodeUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.encryptedUserData">EncryptedUserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.enterpriseProjectId">EnterpriseProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.functiongraphVersion">FunctiongraphVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.handler">Handler</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.initializerHandler">InitializerHandler</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.initializerTimeout">InitializerTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.logStreamId">LogStreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.maxInstanceNum">MaxInstanceNum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.memorySize">MemorySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.networkId">NetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.package">Package</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.urn">Urn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.userData">UserData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Functions">DataOpentelekomcloudFgsFunctionsV2Functions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppAgency`<sup>Required</sup> <a name="AppAgency" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.appAgency"></a>

```go
func AppAgency() *string
```

- *Type:* *string

---

##### `CodeFilename`<sup>Required</sup> <a name="CodeFilename" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeFilename"></a>

```go
func CodeFilename() *string
```

- *Type:* *string

---

##### `CodeType`<sup>Required</sup> <a name="CodeType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeType"></a>

```go
func CodeType() *string
```

- *Type:* *string

---

##### `CodeUrl`<sup>Required</sup> <a name="CodeUrl" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.codeUrl"></a>

```go
func CodeUrl() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EncryptedUserData`<sup>Required</sup> <a name="EncryptedUserData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.encryptedUserData"></a>

```go
func EncryptedUserData() *string
```

- *Type:* *string

---

##### `EnterpriseProjectId`<sup>Required</sup> <a name="EnterpriseProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.enterpriseProjectId"></a>

```go
func EnterpriseProjectId() *string
```

- *Type:* *string

---

##### `FunctiongraphVersion`<sup>Required</sup> <a name="FunctiongraphVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.functiongraphVersion"></a>

```go
func FunctiongraphVersion() *string
```

- *Type:* *string

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.handler"></a>

```go
func Handler() *string
```

- *Type:* *string

---

##### `InitializerHandler`<sup>Required</sup> <a name="InitializerHandler" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.initializerHandler"></a>

```go
func InitializerHandler() *string
```

- *Type:* *string

---

##### `InitializerTimeout`<sup>Required</sup> <a name="InitializerTimeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.initializerTimeout"></a>

```go
func InitializerTimeout() *f64
```

- *Type:* *f64

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.logStreamId"></a>

```go
func LogStreamId() *string
```

- *Type:* *string

---

##### `MaxInstanceNum`<sup>Required</sup> <a name="MaxInstanceNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.maxInstanceNum"></a>

```go
func MaxInstanceNum() *f64
```

- *Type:* *f64

---

##### `MemorySize`<sup>Required</sup> <a name="MemorySize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.memorySize"></a>

```go
func MemorySize() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.networkId"></a>

```go
func NetworkId() *string
```

- *Type:* *string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.package"></a>

```go
func Package() *string
```

- *Type:* *string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Urn`<sup>Required</sup> <a name="Urn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.urn"></a>

```go
func Urn() *string
```

- *Type:* *string

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.userData"></a>

```go
func UserData() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2FunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudFgsFunctionsV2Functions
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudFgsFunctionsV2.DataOpentelekomcloudFgsFunctionsV2Functions">DataOpentelekomcloudFgsFunctionsV2Functions</a>

---



