# `dataOpentelekomcloudGeminiTemplatesV3` Submodule <a name="`dataOpentelekomcloudGeminiTemplatesV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudGeminiTemplatesV3 <a name="DataOpentelekomcloudGeminiTemplatesV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_templates_v3 opentelekomcloud_gemini_templates_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudgeminitemplatesv3"

dataopentelekomcloudgeminitemplatesv3.NewDataOpentelekomcloudGeminiTemplatesV3(scope Construct, id *string, config DataOpentelekomcloudGeminiTemplatesV3Config) DataOpentelekomcloudGeminiTemplatesV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config">DataOpentelekomcloudGeminiTemplatesV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config">DataOpentelekomcloudGeminiTemplatesV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudGeminiTemplatesV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudgeminitemplatesv3"

dataopentelekomcloudgeminitemplatesv3.DataOpentelekomcloudGeminiTemplatesV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudgeminitemplatesv3"

dataopentelekomcloudgeminitemplatesv3.DataOpentelekomcloudGeminiTemplatesV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudgeminitemplatesv3"

dataopentelekomcloudgeminitemplatesv3.DataOpentelekomcloudGeminiTemplatesV3_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudgeminitemplatesv3"

dataopentelekomcloudgeminitemplatesv3.DataOpentelekomcloudGeminiTemplatesV3_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudGeminiTemplatesV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudGeminiTemplatesV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudGeminiTemplatesV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_templates_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudGeminiTemplatesV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.templates">Templates</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList">DataOpentelekomcloudGeminiTemplatesV3TemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Templates`<sup>Required</sup> <a name="Templates" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.templates"></a>

```go
func Templates() DataOpentelekomcloudGeminiTemplatesV3TemplatesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList">DataOpentelekomcloudGeminiTemplatesV3TemplatesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudGeminiTemplatesV3Config <a name="DataOpentelekomcloudGeminiTemplatesV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudgeminitemplatesv3"

&dataopentelekomcloudgeminitemplatesv3.DataOpentelekomcloudGeminiTemplatesV3Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_templates_v3#id DataOpentelekomcloudGeminiTemplatesV3#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/data-sources/gemini_templates_v3#id DataOpentelekomcloudGeminiTemplatesV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOpentelekomcloudGeminiTemplatesV3Templates <a name="DataOpentelekomcloudGeminiTemplatesV3Templates" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Templates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Templates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudgeminitemplatesv3"

&dataopentelekomcloudgeminitemplatesv3.DataOpentelekomcloudGeminiTemplatesV3Templates {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudGeminiTemplatesV3TemplatesList <a name="DataOpentelekomcloudGeminiTemplatesV3TemplatesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudgeminitemplatesv3"

dataopentelekomcloudgeminitemplatesv3.NewDataOpentelekomcloudGeminiTemplatesV3TemplatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudGeminiTemplatesV3TemplatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference <a name="DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudgeminitemplatesv3"

dataopentelekomcloudgeminitemplatesv3.NewDataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.datastoreName">DatastoreName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.datastoreVersionName">DatastoreVersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.userDefined">UserDefined</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Templates">DataOpentelekomcloudGeminiTemplatesV3Templates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DatastoreName`<sup>Required</sup> <a name="DatastoreName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.datastoreName"></a>

```go
func DatastoreName() *string
```

- *Type:* *string

---

##### `DatastoreVersionName`<sup>Required</sup> <a name="DatastoreVersionName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.datastoreVersionName"></a>

```go
func DatastoreVersionName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UserDefined`<sup>Required</sup> <a name="UserDefined" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.userDefined"></a>

```go
func UserDefined() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3TemplatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudGeminiTemplatesV3Templates
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudGeminiTemplatesV3.DataOpentelekomcloudGeminiTemplatesV3Templates">DataOpentelekomcloudGeminiTemplatesV3Templates</a>

---



